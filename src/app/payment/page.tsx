'use client';

import { useState } from 'react';

export default function PaymentPage() {
    const [selectedPackage, setSelectedPackage] = useState(''); // State for selected package
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // State for selected payment method
    const [couponCode, setCouponCode] = useState(''); // State for coupon code

    // Mock data for packages (replace with your actual data fetching)
    const packages = [
        { id: 'monthly', name: 'แพ็กเกจรายเดือน', price: 799, description: '-เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน\n-ส่วนลด 5% สำหรับการเทรนส่วนตัว', imageUrl: 'https://i.gyazo.com/ec3b99c6d647416399b7b6db6c44efc6.png' },
        { id: 'six-month', name: 'แพ็กเกจราย 6 เดือน', price: 4190, description: '-เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน\n-ส่วนลด 10% สำหรับการเทรนส่วนตัว\n-รับสิทธิ์ใช้บริการเทรนเนอร์ส่วนตัวฟรี 1 ครั้ง', imageUrl: 'https://davidlaid.com/cdn/shop/products/David-Laid.04_600x600.jpg?v=1553585645' },
        { id: 'yearly', name: 'แพ็กเกจรายปี', price: 6990, description: '-เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน\n-ส่วนลด 15% สำหรับการเทรนส่วนตัว\n-รับสิทธิ์ใช้บริการเทรนเนอร์ส่วนตัวฟรี 2 ครั้ง', imageUrl: 'https://www.mensfitness.com/.image/t_share/MjExODYwMzk4NzI1NDA4NzQ0/olympia-fitness--performance-weekend.jpg' },
    ];

    // Mock data for selected package details
    const selectedPackageDetails = selectedPackage
        ? packages.find(pkg => pkg.id === selectedPackage)
        : null;

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
                        {packages.map(pkg => (
                            <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                        ))}
                    </select>
                </div>

                {/* Horizontal Card for Package Details */}
                {selectedPackageDetails && (
                    <div className={`max-w-3xl flex items-stretch border border-gray-300 rounded-md overflow-hidden shadow-sm min-h-[160px] text-white ${
                        selectedPackage === 'monthly' ? 'bg-[#CD7F32]' :
                        selectedPackage === 'six-month' ? 'bg-[#A9A9A9]' :
                        selectedPackage === 'yearly' ? 'bg-[#E8BD4B]' :
                        ''
                    }`}>
                        {/* Ensure all text elements inside inherit white color */}
                        <style jsx global>{`
                            .text-gray-700 { color: white !important; }
                        `}</style>
                        <div className="w-1/3 max-h-full md:max-h-[180px]">
                            <img
                                src={selectedPackageDetails.imageUrl}
                                alt={selectedPackageDetails.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-center w-full md:w-2/3">
                            <h3 className="text-lg font-bold mb-2">{selectedPackageDetails.name}</h3>
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
                        <option value="credit_card">บัตรเครดิต</option>
                        <option value="promptpay">พร้อมเพย์</option>
                    </select>
                </div>

                {/* Payment Input Fields (Conditional) */}
                {selectedPaymentMethod && (
                    <div className="bg-[#F1F1F3] p-4 rounded-md">
                        {selectedPaymentMethod === 'credit_card' && (
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                        หมายเลขบัตร
                                    </label>
                                    <input
                                        type="text"
                                        id="card-number"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        placeholder="xxxx xxxx xxxx xxxx"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                                            วันหมดอายุ (MM/YY)
                                        </label>
                                        <input
                                            type="text"
                                            id="expiry-date"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                            CVC
                                        </label>
                                        <input
                                            type="text"
                                            id="cvc"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            placeholder="CVC"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">
                                        ชื่อผู้ถือบัตร
                                    </label>
                                    <input
                                        type="text"
                                        id="card-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        placeholder="ชื่อ - นามสกุลผู้ถือบัตร"
                                    />
                                </div>
                            </div>
                        )}
                        {selectedPaymentMethod === 'promptpay' && (
                            <div>
                                <p className="text-lg font-semibold mb-2">พร้อมเพย์</p>
                                {/* Replace with actual PromptPay details */}
                                <p className="text-gray-700">หมายเลขพร้อมเพย์: XXX-XXX-XXXX</p>
                                <p className="text-gray-700">ชื่อบัญชี: [ชื่อเจ้าของบัญชี]</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Section 3: Total Summary & Coupon */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#C30E2F]">ยอดชำระทั้งหมด</h2>
                <div className="text-[#C30E2F] text-2xl font-semibold mb-2">
                    ฿{selectedPackageDetails ? selectedPackageDetails.price : '0.00'} {/* Display selected package price */}
                </div>
                <div className="text-gray-700 text-sm mb-4">
                    ส่วนลด - 0 บาท {/* Placeholder for discount */}
                </div>
                <div className="mb-4">
                    <label htmlFor="coupon" className="block text-sm font-medium">
                        กรอกส่วนลด
                    </label>
                    <input
                        type="text"
                        id="coupon"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                </div>
            </div>

            {/* Confirmation Button */}
            <div className="flex justify-end">
                <button className="px-6 py-3 bg-[#C30E2F] text-white text-lg font-semibold rounded-md">
                    ยืนยันสมัคร
                </button>
            </div>
        </div>
    );
}
