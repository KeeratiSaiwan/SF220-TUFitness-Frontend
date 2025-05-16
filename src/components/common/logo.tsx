import { Dumbbell } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-xl font-bold text-foreground ${className}`}>
      {/* <Dumbbell className="h-7 w-7 text-primary" /> */}
      <img src="/logo/Thammasat_main_logo.png" alt="Thammasat Main Logo" className="h-14 w-14" />
      <span><span className='text-primary'>TU</span>FITNESS</span>
    </Link>
  );
}
