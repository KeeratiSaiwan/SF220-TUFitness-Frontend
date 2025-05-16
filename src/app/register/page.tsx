'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
    const [mode, setMode] = useState('register');
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        tel: '',
        date_of_birth: '',
        id_card_number: '',
        member_type: '',
    });
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                router.push('/payment');
            }
        }
    }, [router]);

    const handleModeChange = (newMode: string) => {
        setMode(newMode);
        setError('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.id || e.target.name]: e.target.value });
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    };

    const handleRegister = async () => {
        setError('');
        // Basic validation
        if (!form.email || !form.password || !form.firstname || !form.lastname) {
            setError('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                setError(data.error || 'เกิดข้อผิดพลาด');
                return;
            }
            // Success: alert and switch to login mode
            alert('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ');
            setMode('login');
        } catch (err) {
            setError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์');
        }
    };

    const handleLogin = async () => {
        setLoginError('');
        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginForm),
            });
            if (!res.ok) {
                setLoginError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
                return;
            }
            const user = await res.json();
            // Save token (for demo, use user.id)
            localStorage.setItem('token', user.id);
            router.push('/');
        } catch (err) {
            setLoginError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์');
            console.error('Login error:', err);
        }
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
                        {loginError && <div className="text-red-500 mb-2">{loginError}</div>}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                อีเมล
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={loginForm.email}
                                onChange={handleLoginChange}
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
                                value={loginForm.password}
                                onChange={handleLoginChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-[#C30E2F] text-white rounded-md"
                                onClick={handleLogin}
                            >
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </div>
                ) : (
                    // Register Form
                    <div>
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        อีเมล
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={form.email}
                                        onChange={handleChange}
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
                                        value={form.firstname}
                                        onChange={handleChange}
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
                                        value={form.tel}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">
                                        วัน/เดือน/ปี เกิด
                                    </label>
                                    <input
                                        type="date"
                                        id="date_of_birth"
                                        value={form.date_of_birth}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>
                            {/* Right */}
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        รหัสผ่าน
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={form.password}
                                        onChange={handleChange}
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
                                        value={form.lastname}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="id_card_number" className="block text-sm font-medium text-gray-700">
                                        หมายเลขบัตรประชาชน
                                    </label>
                                    <input
                                        type="text"
                                        id="id_card_number"
                                        value={form.id_card_number}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="member_type" className="block text-sm font-medium text-gray-700">
                                        ประเภทสมาชิก
                                    </label>
                                    <select
                                        id="member_type"
                                        value={form.member_type}
                                        onChange={handleChange}
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
                            <button
                                className="px-4 py-2 bg-[#C30E2F] text-white rounded-md"
                                onClick={handleRegister}
                            >
                                สมัครสมาชิก
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
