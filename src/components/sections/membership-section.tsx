import MembershipCard from '@/components/common/membership-card';

const membershipPackages = [
  {
    title: 'Basic Fit',
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Basic fitness package',
    dataAiHint: 'dumbbells weights',
    price: '฿999',
    originalPrice: '฿1200',
    description: [
      'Access to all gym equipment',
      'Locker room access',
      'Open gym hours',
      'Online workout tracker',
    ],
    buttonText: 'Get Started',
  },
  {
    title: 'Pro Active',
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Pro fitness package',
    dataAiHint: 'group class fitness',
    price: '฿1499',
    originalPrice: '฿1800',
    description: [
      'All Basic Fit features',
      'Unlimited group classes',
      '1 Personal training session/month',
      'Towel service',
    ],
    buttonText: 'Choose Pro',
    popular: true,
  },
  {
    title: 'Elite Wellness',
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Elite fitness package',
    dataAiHint: 'personal trainer consultation',
    price: '฿2499',
    originalPrice: '฿3000',
    description: [
      'All Pro Active features',
      '4 Personal training sessions/month',
      'Nutrition consultation',
      'Premium locker access',
    ],
    buttonText: 'Go Elite',
  },
];

export default function MembershipSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            เข้ามาลองใช้บริการเลย!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget. Start your journey with TUFitness today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipPackages.map((pkg) => (
            <MembershipCard
              key={pkg.title}
              title={pkg.title}
              imageSrc={pkg.imageSrc}
              imageAlt={pkg.imageAlt}
              dataAiHint={pkg.dataAiHint}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              description={pkg.description}
              buttonText={pkg.buttonText}
              popular={pkg.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
