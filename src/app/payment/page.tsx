'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
    const [selectedPackage, setSelectedPackage] = useState(''); // State for selected package
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // State for selected payment method
    const [couponCode, setCouponCode] = useState(''); // State for coupon code
    const [products, setProducts] = useState<any[]>([]); // State for products from API
    const [discountInfo, setDiscountInfo] = useState<any>(null);
    const [discountError, setDiscountError] = useState('');
    const [finalPrice, setFinalPrice] = useState<number | null>(null);
    const [paymentSlip, setPaymentSlip] = useState<File | null>(null);

    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/register');
            }
        }
    }, [router]);

    // Fetch products from API
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(() => setProducts([]));
    }, []);

    const selectedPackageDetails = selectedPackage
        ? products.find(pkg => String(pkg.id) === String(selectedPackage))
        : null;

    // Check discount code
    const handleCheckDiscount = async () => {
        setDiscountError('');
        setDiscountInfo(null);
        setFinalPrice(selectedPackageDetails ? selectedPackageDetails.price : null);

        if (!couponCode || !selectedPackageDetails) return;

        try {
            const res = await fetch('http://localhost:3000/api/promotions');
            const promotions = await res.json();
            const found = promotions.find(
                (promo: any) =>
                    promo.discount_code?.toLowerCase() === couponCode.trim().toLowerCase() &&
                    Number(promo.promotion_product) === Number(selectedPackageDetails.id)
            );
            if (found) {
                setDiscountInfo(found);
                const discounted = selectedPackageDetails.price * (1 - found.discount_percent / 100);
                setFinalPrice(discounted);
            } else {
                setDiscountError('ไม่พบโค้ดส่วนลดนี้ หรือโค้ดไม่ตรงกับแพ็กเกจที่เลือก');
                setFinalPrice(selectedPackageDetails.price);
            }
        } catch {
            setDiscountError('เกิดข้อผิดพลาดในการตรวจสอบโค้ดส่วนลด');
            setFinalPrice(selectedPackageDetails.price);
        }
    };

    // Update final price when package changes or discount is cleared
    useEffect(() => {
        if (selectedPackageDetails) {
            setFinalPrice(selectedPackageDetails.price);
            setDiscountInfo(null);
            setDiscountError('');
        }
    }, [selectedPackageDetails]);

    const handlePayment = async () => {
        if (!selectedPackageDetails || !selectedPaymentMethod) return;

        const formData = new FormData();
        formData.append('payment_owner', localStorage.getItem('token') || '');
        formData.append('method', selectedPaymentMethod);
        formData.append('date', new Date().toISOString());
        if (paymentSlip) {
            formData.append('picture', paymentSlip);
        }

        try {
            const res = await fetch('http://localhost:3000/api/payments', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) {
                alert('เกิดข้อผิดพลาดในการบันทึกการชำระเงิน');
                return;
            }
            const data = await res.json();
            const paymentId = data.id;

            // Calculate end_date
            const duration = selectedPackageDetails.duration || 30;
            const startDate = new Date();
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + duration);

            // Post to subscription
            const subRes = await fetch('http://localhost:3000/api/subscriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: selectedPackageDetails.id,
                    customer: localStorage.getItem('token'),
                    payment: paymentId,
                    end_date: endDate.toISOString(),
                }),
            });

            if (!subRes.ok) {
                alert('เกิดข้อผิดพลาดในการสร้างสมาชิก');
                return;
            }

            router.push('/summary');
        } catch {
            alert('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์');
        }
    };

    const getPackageBg = () => {
        if (!selectedPackageDetails) return 'bg-[#C30E2F]';
        if (selectedPackageDetails.name.includes('รายเดือน')) return 'bg-[#CD7F32]';
        if (selectedPackageDetails.name.includes('6 เดือน')) return 'bg-[#A9A9A9]';
        if (selectedPackageDetails.name.includes('รายปี')) return 'bg-[#E8BD4B]';
        return 'bg-[#C30E2F]'; // default
    };

    return (
        <div className="container mx-auto px-4 py-8">
      {/* Section 1: Package Selection */} 
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#C30E2F]">เลือกแพ็กเกจ</h2>
                {/* Package Selection Input */}
                <div className="mb-4">
                    <label htmlFor="package-select" className="block text-sm font-medium text-gray-700">
                        เลือกแพ็กเกจสมาชิก
                    </label>
                    <select
                        id="package-select"
                        className="mt-1 block max-w-sm border border-gray-300 rounded-md shadow-sm p-2 bg-[#C30E2F] text-white"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                    >
                        <option value="">เลือกแพ็กเกจ</option>
                        {products.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>
                                {pkg.name} - ฿{pkg.price}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Horizontal Card for Package Details */}
                {selectedPackageDetails && (
                    <div className={`max-w-xl flex items-stretch border border-gray-300 rounded-md overflow-hidden shadow-sm min-h-[180px] text-white ${getPackageBg()}`}>
                        <div className="w-1/3 max-h-full md:max-h-[180px] flex items-center justify-center bg-white">
                            {selectedPackageDetails.picture ? (
                                <img
                                    src={selectedPackageDetails.picture}
                                    alt={selectedPackageDetails.name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <span className="text-[#C30E2F] font-bold text-xl">
                                    {selectedPackageDetails.name[0]}
                                </span>
                            )}
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-center w-full md:w-2/3">
                            <h3 className="text-3xl font-bold mb-3">{selectedPackageDetails.name}</h3>
                            <p className="text-xl font-semibold mb-2">฿{selectedPackageDetails.price}</p>
                            <p className="text-sm whitespace-pre-wrap">{selectedPackageDetails.description}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Section 2: Payment */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#C30E2F]">ช่องทางการชำระเงิน</h2>
                {/* Payment Method Selection Input */}
                <div className="mb-4">
                    <label htmlFor="payment-method-select" className="block text-sm font-medium text-gray-700">
                        เลือกช่องทางการชำระเงิน
                    </label>
                    <select
                        id="payment-method-select"
                        className="mt-1 block max-w-sm border border-gray-300 rounded-md shadow-sm p-2 bg-[#C30E2F] text-white"
                        value={selectedPaymentMethod}
                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    >
                        <option value="">เลือกช่องทางการชำระเงิน</option>
                        <option value="promptpay">พร้อมเพย์</option>
                    </select>
                </div>

                {/* Payment Input Fields (Conditional) */}
                {selectedPaymentMethod && (
                    <div className="bg-[#F1F1F3] p-4 rounded-md max-w-xl">
                        {selectedPaymentMethod === 'promptpay' && (
                            <div>
                                <p className="text-lg font-semibold mb-2">พร้อมเพย์</p>
                                {/* Replace with actual PromptPay details */}
                                <p className="">หมายเลขพร้อมเพย์: XXX-XXX-XXXX</p>
                                <p className="">ชื่อบัญชี: นายไอซ์เน็ค ดิวหนึ่ง</p>
                                {/* File input for bill payment */}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        อัปโหลดสลิปการชำระเงิน
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
                                        onChange={e => setPaymentSlip(e.target.files?.[0] || null)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Section 3: Total Summary & Coupon */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#C30E2F]">ยอดชำระทั้งหมด</h2>
                <div className="text-[#C30E2F] text-2xl font-semibold mb-2">
                    ฿{finalPrice !== null ? finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '0.00'}
                </div>
                {discountInfo && (
                    <div className="text-green-600 mb-2">
                        ใช้โค้ด <b>{discountInfo.discount_code}</b> ลด {discountInfo.discount_percent}% สำเร็จ!
                        <div className="text-gray-700 line-through">
                            ราคาปกติ ฿{selectedPackageDetails.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                )}
                <div className="text-sm mb-4">
                    ส่วนลด - {discountInfo ? `${(selectedPackageDetails.price - finalPrice).toLocaleString(undefined, { minimumFractionDigits: 2 })} บาท` : '0 บาท'}
                </div>
                <div className="mb-4 flex gap-2 items-center">
                    <label htmlFor="coupon" className="block text-sm font-medium">
                        กรอกส่วนลด
                    </label>
                    <input
                        type="text"
                        id="coupon"
                        className="mt-1 block max-w-md border border-gray-300 rounded-md shadow-sm p-2"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                        type="button"
                        className="px-4 py-2 bg-[#C30E2F] text-white rounded-md"
                        onClick={handleCheckDiscount}
                    >
                        ตรวจสอบ
                    </button>
                </div>
                {discountError && <div className="text-red-600">{discountError}</div>}
            </div>

            {/* Confirmation Button */}
            <div className="flex justify-end">
                <button
                    className="px-6 py-3 bg-[#C30E2F] text-white text-lg font-semibold rounded-md"
                    onClick={handlePayment}
                >
                    ยืนยันการสมัคร
                </button>
            </div>
        </div>
    );
}
