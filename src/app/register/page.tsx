'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
    const [mode, setMode] = useState('register'); // 'register' or 'login'

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: "url('https://a-static.besthdwallpaper.com/gym-bodybuilder-showing-off-his-muscles-black-and-white-photo-wallpaper-3840x2400-92000_9.jpg')" }}
        >
            {/* Container Box */}
            <div
                className={`bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full ${mode === 'login' ? 'max-w-md' : 'max-w-3xl'
                    }`}
            >
                {/* Header */}
                <div className="flex justify-center items-center text-2xl font-bold mb-8">
                    <span
                        className={`cursor-pointer ${mode === 'login' ? 'text-primary' : ''} hover:text-primary transition-colors`}
                        onClick={() => handleModeChange('login')}
                    >
                        เข้าสู่ระบบ
                    </span>
                    <span className="mx-2 text-black">/</span>
                    <span
                        className={`cursor-pointer ${mode === 'register' ? 'text-primary' : ''} hover:text-primary transition-colors`}
                        onClick={() => handleModeChange('register')}
                    >
                        สมัครสมาชิก
                    </span>
                </div>

                {/* Forms */}
                {mode === 'login' ? (
                    // Login Form
                    <div className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                อีเมล
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                รหัสผ่าน
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-[#C30E2F] text-white rounded-md">
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </div>
                ) : (
                    // Register Form
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700">
                                        อีเมล
                                    </label>
                                    <input
                                        type="email"
                                        id="reg-email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                        ชื่อจริง
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">
                                        เบอร์โทรศัพท์
                                    </label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                                        วัน/เดือน/ปี เกิด
                                    </label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>
                            {/* Right */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700">
                                        รหัสผ่าน
                                    </label>
                                    <input
                                        type="password"
                                        id="reg-password"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                        นามสกุล
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="id-card" className="block text-sm font-medium text-gray-700">
                                        หมายเลขบัตรประชาชน
                                    </label>
                                    <input
                                        type="text"
                                        id="id-card"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="membership-type" className="block text-sm font-medium text-gray-700">
                                        ประเภทสมาชิก
                                    </label>
                                    <select
                                        id="membership-type"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    >
                                        <option value="">เลือกประเภทสมาชิก</option>
                                        <option value="normal">ทั่วไป</option>
                                        <option value="vip">VIP</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="px-4 py-2 bg-[#C30E2F] text-white rounded-md">
                                ถัดไป
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
