'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    contact_name: '',
    contact_email: '',
    contact_tel: '',
    title: '',
    detail: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const res = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'เกิดข้อผิดพลาด');
        return;
      }
      setSuccess('ส่งข้อมูลสำเร็จ! ขอบคุณที่ติดต่อเรา');
      setForm({
        contact_name: '',
        contact_email: '',
        contact_tel: '',
        title: '',
        detail: '',
      });
    } catch (err) {
      setError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      {/* Container Box */}
      <div className="bg-[#F1F1F3] rounded-md shadow-md flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl text-primary font-bold mb-6">ติดต่อเรา</h2>
          <form onSubmit={handleSubmit} className="w-full">
            {success && <div className="mb-4 text-green-600">{success}</div>}
            {error && <div className="mb-4 text-red-600">{error}</div>}
            {!success && (
              <>
                <div className="mb-4">
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700">
                    ชื่อผู้ติดต่อ
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    value={form.contact_name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700">
                    อีเมลผู้ติดต่อ
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    value={form.contact_email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact_tel" className="block text-sm font-medium text-gray-700">
                    เบอร์โทรศัพท์ผู้ติดต่อ
                  </label>
                  <input
                    type="tel"
                    id="contact_tel"
                    value={form.contact_tel}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    เรื่องที่ติดต่อ
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="detail" className="block text-sm font-medium text-gray-700">
                    รายละเอียด
                  </label>
                  <textarea
                    id="detail"
                    rows={4}
                    value={form.detail}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#C30E2F] text-white text-lg font-semibold rounded-md"
                  >
                    ส่ง
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {success ? (
            <img
              src="https://media.discordapp.net/attachments/1296040018967531560/1372954837645267064/IMG_8452.jpg?ex=6828a755&is=682755d5&hm=d0926cf55da37b9b5f96dde4a441ca774b8a8d125825a8378df5fc2dc0f2e2df&=&format=webp&width=1424&height=1421"
              alt="success"
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrHk_Rp6PRKwqmSjscHyA8UiPSlXSr8UaMw&s"
              alt="Contact Us"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
