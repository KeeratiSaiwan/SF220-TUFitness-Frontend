import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { StaticImageData } from 'next/image';

interface MembershipCardProps {
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
  title,
  imageSrc,
  imageAlt,
  dataAiHint,
  price,
  originalPrice,
  description,
  buttonText,
  popular = false,
}: MembershipCardProps) {
  return (
    <Card className={`flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${popular ? 'border-primary border-2 relative' : 'border-border'}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg z-10">
          POPULAR
        </div>
      )}
      <CardHeader className="p-0">
        <div className="relative w-full h-56">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={dataAiHint}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <div className="mb-4">
          <span className="text-4xl font-extrabold text-primary">{price}</span>
          {originalPrice && (
            <span className="ml-2 text-lg text-muted-foreground line-through">{originalPrice}</span>
          )}
          <span className="text-sm text-muted-foreground"> / month</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button size="lg" className={`w-full ${popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
