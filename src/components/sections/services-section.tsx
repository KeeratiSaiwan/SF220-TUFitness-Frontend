import ServiceItem from '@/components/common/service-item';
import { Dumbbell, Users, Zap, Apple, Cog } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Weight Training',
    description: 'Build strength and muscle with our state-of-the-art weight training equipment and facilities.',
  },
  {
    icon: Users,
    title: 'Personal Trainers',
    description: 'Achieve your goals faster with personalized guidance from our certified personal trainers.',
  },
  {
    icon: Zap,
    title: 'Group Fitness Classes',
    description: 'Join energetic group classes like Zumba, Yoga, HIIT, and more to stay motivated.',
  },
  {
    icon: Apple,
    title: 'Nutrition Counseling',
    description: 'Get expert advice on diet and nutrition to complement your fitness journey.',
  },
  {
    icon: Cog,
    title: 'Modern Equipment',
    description: 'Train with the latest and most effective fitness machines and tools available.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center lg:text-left">
              บริการของเรา
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center lg:text-left">
              At TUFitness, we offer a wide range of services to help you achieve your health and fitness goals. Explore what we have to offer!
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceItem
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
