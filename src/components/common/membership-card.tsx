"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import type { StaticImageData } from 'next/image';

type PackageId = 'monthly' | 'six-month' | 'yearly';
interface MembershipCardProps {
  packageId: string,
  title: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint?: string;
  price: string;
  originalPrice?: string;
  description: string[];
 buttonText: string;
 popular?: boolean;


}

export default function MembershipCard({
  packageId,
  title,
  imageSrc,
  imageAlt,
  dataAiHint,
  price,
  originalPrice,
  description,
  buttonText,
}: MembershipCardProps) {
  const router = useRouter();
 const cardClassName = `flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-border ${
  packageId === 'monthly' ? 'bg-[#CD7F32]' :
  packageId === 'six-month' ? 'bg-[#A9A9A9]' :
  packageId === 'yearly' ? 'bg-[#E8BD4B]' :
  ''
}`;
  return (
    <Card className={cardClassName}>
      <CardHeader className="p-0 mb-4">
        <div className="p-6">
          <CardTitle className="text-4xl text-center font-bold text-white">{title}</CardTitle>
        </div>
        <div className="relative w-full h-56">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-lg text-primary line-through">{originalPrice}</span>
          )}
          <span className="text-sm text-white"> / month</span>
        </div>
        <ul className="space-y-2 text-sm text-primary">
          {description.map((item, index) => (
            <li key={index} className="flex items-center text-white">
              <svg className="w-4 h-4 mr-2 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" className="text-primary"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button size="lg" className="w-full" onClick={() => router.push('/register')}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
