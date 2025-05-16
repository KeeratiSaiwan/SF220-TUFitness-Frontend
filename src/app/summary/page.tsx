'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SummaryPage() {
  const router = useRouter();
  const [subscription, setSubscription] = useState<any>(null);
  const [payment, setPayment] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/register');
        return;
      }

      // Fetch latest subscription for this user
      fetch(`http://localhost:3000/api/subscriptions`)
        .then(res => res.json())
        .then(subs => {
          // Find the latest subscription for this user
          const userSubs = subs.filter((s: any) => String(s.customer) === String(token));
          if (userSubs.length === 0) return;
          // Sort by id DESC to get the latest
          const latestSub = userSubs.sort((a: any, b: any) => b.id - a.id)[0];
          setSubscription(latestSub);

          // Fetch payment info for this subscription
          if (latestSub && latestSub.payment) {
            fetch(`http://localhost:3000/api/payments/${latestSub.payment}`)
              .then(res => res.json())
              .then(setPayment);
          }
        });
    }
  }, [router]);

  // Fallbacks if not loaded yet
  const membershipId = subscription ? `#${subscription.id}` : '...';
  const startDate = payment ? new Date(payment.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' }) : '...';
  const endDate = subscription ? new Date(subscription.end_date).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' }) : '...';
  const qrCodeUrl = subscription
    ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(subscription.id)}`
    : 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=...';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-8 text-[#C30E2F]">สมัครสมาชิกสำเร็จ</h1>

      {/* Membership ID */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">รหัสสมาชิกของท่าน</h2>
        <p className="text-xl font-bold text-[#C30E2F]">{membershipId}</p>
      </div>

      {/* Start - End Date */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">วันเริ่มต้น - หมดอายุ ของสมาชิกของท่าน</h2>
        <p className="text-xl font-bold">
          <span className="text-[#C30E2F]">{startDate}</span> - <span className="text-[#C30E2F]">{endDate}</span>
        </p>
      </div>

      {/* QR Code */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">QR Code สำหรับเข้าใช้บริการ</h2>
        <div className="mb-4">
          <img src={qrCodeUrl} alt="QR Code" width={150} height={150} />
        </div>
        <h3 className="text-lg font-semibold mb-2">วิธีการเข้าใช้บริการ</h3>
        <p className="text-gray-700">แสดง QR Code นี้ที่หน้าเคาน์เตอร์ทุกครั้งก่อนเข้าใช้บริการ</p>
      </div>

      {/* Receipt Download */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">ดาวน์โหลดใบเสร็จ</h2>
        <button className="px-4 py-2 bg-[#C30E2F] text-white rounded-md">
          ดาวน์โหลดที่นี่
        </button>
      </div>

      {/* Return Home Button */}
      <div className="flex justify-end">
        <Link href="/">
          <button className="px-6 py-3 bg-[#C30E2F] text-white text-lg font-semibold rounded-md">
            กลับหน้าหลัก
          </button>
        </Link>
      </div>
    </div>
  );
}
