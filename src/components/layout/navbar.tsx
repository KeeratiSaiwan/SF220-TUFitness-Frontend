"use client"
import Link from 'next/link';
import { Logo } from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Initial check
    setHasToken(!!localStorage.getItem('token'));

    // Listen for storage changes (cross-tab)
    const handleStorage = () => {
      setHasToken(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Also update when navigating in the same tab (after login)
  useEffect(() => {
    const interval = setInterval(() => {
      setHasToken(!!localStorage.getItem('token'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken(false);
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#F1F1F3] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Nav links */}
        <nav className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex space-x-6">
          <Link
              href="/"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              หน้าแรก
            </Link>
          {hasToken ? (
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link
              href="/register"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              เข้าสู่ระบบ / สมัครสมาชิก
            </Link>
          )}
          <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              ติดต่อเรา
            </Link>
        </nav>

        {/* Right: Mobile Menu */}
        <div className="md:hidden absolute right-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#F1F1F3]">
              <div className="flex flex-col space-y-6 p-6">
                <Logo />
                <nav className="flex flex-col space-y-4">
                  <Link
                      href="/"
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      หน้าแรก
                    </Link>
                  {hasToken ? (
                    <button
                      onClick={handleLogout}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary bg-transparent border-none text-left cursor-pointer"
                    >
                      ออกจากระบบ
                    </button>
                  ) : (
                    <Link
                      href="/register"
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      เข้าสู่ระบบ / สมัครสมาชิก
                    </Link>
                  )}
                  <Link
                      href="/contact"
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      ติดต่อเรา
                    </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
