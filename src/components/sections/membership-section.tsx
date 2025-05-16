import MembershipCard from '@/components/common/membership-card';

const membershipPackages = [
  {
    packageId: "monthly",
    title: 'แพ็กเกจรายเดือน',
    imageSrc: '/images/4.jpg',
    imageAlt: 'Monthly image',
    dataAiHint: 'dumbbells weights',
    price: '฿799',
    originalPrice: '฿3000',
    description: [
      'เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน',
      'ส่วนลด 5% สำหรับบริการเทรนเนอร์ส่วนตัว'
    ],
    buttonText: 'สมัครเลย',
  },
  {
    packageId: "six-month",
    title: 'แพ็กเกจราย 6 เดือน',
    imageSrc: '/images/2.jpg',
    imageAlt: 'Six month image',
    dataAiHint: 'group class fitness',
    price: '฿4190',
    originalPrice: '฿12000',
    description: [
      'เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน',
      'ส่วนลด 10% สำหรับบริการเทรนเนอร์ส่วนตัว',
      'รับสิทธิ์ใช้บริการเทรนเนอร์ส่วนตัวฟรี 1 ครั้ง'
    ],
    buttonText: 'สมัครเลย'
  },
  {
    packageId: "yearly",
    title: 'แพ็กเกจรายปี',
    imageSrc: '/images/3.jpg',
    imageAlt: 'yearly image',
    dataAiHint: 'personal trainer consultation',
    price: '฿6990',
    originalPrice: '฿24000',
    description: [
      'เข้าใช้บริการทุกส่วนในฟิตเนสได้ทุกวัน',
      'ส่วนลด 15% สำหรับบริการเทรนเนอร์ส่วนตัว',
      'รับสิทธิ์ใช้บริการเทรนเนอร์ส่วนตัวฟรี 2 ครั้ง'
    ],
    buttonText: 'สมัครเลย',
  },
];

export default function MembershipSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl text-primary md:text-5xl font-bold text-foreground mb-10">
            เข้ามาลองใช้บริการเลย!
          </h1>
          <h2 className='text-xl md:text-2xl font-bold text-foreground mb-10'>
            สำหรับ นักศึกษา/บุคลากรในมหาวิทยาลัยธรรมศาสตร์
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            นักศึกษาและบุคลากรของมหาวิทยาลัยธรรมศาสตร์สามารถเข้าใช้งานได้ฟรี!
          </p>
          <h2 className='text-xl md:text-2xl font-bold text-foreground mb-10'>
            สำหรับ บุคคลภายนอก
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            บุคคลภายนอกเสียค่าเข้าใช้บริการ <span className='text-primary'>100 บาท/ครั้ง</span> หรือสมัครแพ็กเกจต่อไปนี้
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membershipPackages.map((pkg) => (
            <MembershipCard
              key={pkg.title}
              packageId={pkg.packageId}
              title={pkg.title}
              imageSrc={pkg.imageSrc}
              imageAlt={pkg.imageAlt}
              dataAiHint={pkg.dataAiHint}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              description={pkg.description}
              buttonText={pkg.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
