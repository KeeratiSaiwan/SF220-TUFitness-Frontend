'use client';

import Link from 'next/link'; // Import Link for navigation

export default function SummaryPage() {
  // Mock data (replace with actual data)
  const membershipId = '#12345678';
  const startDate = '17 พค 2568';
  const endDate = '17 มิย 2568';
  const qrCodeUrl = 'https://media.istockphoto.com/id/1347277582/vector/qr-code-sample-for-smartphone-scanning-on-white-background.jpg?s=612x612&w=0&k=20&c=6e6Xqb1Wne79bJsWpyyNuWfkrUgNhXR4_UYj3i_poc0='; // Mock QR code image

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
