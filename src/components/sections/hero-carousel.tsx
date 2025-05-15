'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  { src: 'https://placehold.co/1920x700.png', alt: 'Fitness hero image 1', dataAiHint: 'gym workout' },
  { src: 'https://placehold.co/1920x700.png', alt: 'Fitness hero image 2', dataAiHint: 'yoga class' },
  { src: 'https://placehold.co/1920x700.png', alt: 'Fitness hero image 3', dataAiHint: 'weightlifting equipment' },
];

const SLIDE_INTERVAL = 15000; // 15 seconds

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] max-h-[700px] overflow-hidden group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            data-ai-hint={image.dataAiHint}
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Optional overlay */}
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4 bg-black/20 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to TUFitness</h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md">Achieve Your Fitness Goals With Us</p>
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Join Now
          </Button>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 hover:bg-white/80 text-foreground"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 hover:bg-white/80 text-foreground"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
