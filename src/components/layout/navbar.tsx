import Link from 'next/link';
import { Logo } from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/register', label: 'เข้าสู่ระบบ / สมัครสมาชิก' },
  { href: '/contact', label: 'ติดต่อเรา' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#F1F1F3] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Nav links */}
        <nav className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
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
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

  );
}
