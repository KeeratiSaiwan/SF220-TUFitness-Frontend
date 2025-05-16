import ServiceItem from '@/components/common/service-item';

const services = [
  {
    icon: '/icons/strength-training-icon.png', // Replace with your actual icon path
    title: 'Weight Training',
    description: 'ฝึกความแข็งแรงด้วยโปรแกรมเวทเทรนนิ่งที่ออกแบบอย่างมีประสิทธิภาพ พร้อมอุปกรณ์ครบและโซนฝึกเฉพาะ',
  },
  {
    icon: '/icons/personal-trainer-icon.png', // Replace with your actual icon path
    title: 'Personal Trainers',
    description: 'บริการเทรนเนอร์ส่วนตัว ดูแลแบบใกล้ชิดตามเป้าหมายพร้อมวางแผนการฝึกที่ปลอดภัยและตรงจุด',
  },
  {
    icon: '/icons/cardio-icon.png', // Replace with your actual icon path
    title: 'Cardio Zone',
    description: 'พื้นที่ออกกำลังกายแบบคาร์ดิโอที่ครบครันด้วยลู่วิ่ง จักรยานไฟฟ้า ช่วยเผาผลาญไขมัน เสริมสร้างความแข็งแรงของหัวใจและปอด',
  },
  {
    icon: '/icons/yoga-icon.png', // Replace with your actual icon path
    title: 'Yoga Class',
    description: 'คลาสโยคะเพื่อเสริมสร้างสมดุล ความยืดหยุ่น และความผ่อนคลาย ดำเนินการโดยผู้ฝึกสอนมืออาชีพ',
  },
  {
    icon: '/icons/swimming-icon.png', // Replace with your actual icon path
    title: 'Swimming Pool',
    description: 'สระว่ายน้ำระบบเกลือมาตรฐาน สะอาด ปลอดภัย เหมาะสำหรับการออกกำลังกายและฟื้นฟูกล้ามเนื้อ',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-primary lg:text-left">
              บริการของเรา
            </h1>
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
