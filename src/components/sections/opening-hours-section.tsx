import { Clock } from 'lucide-react';

export default function OpeningHoursSection() {
  const openingTimes = [
    "เปิดทุกวัน",
    "หยุดเฉพาะช่วงเทศกาลปีใหม่และเทศกาลสงกรานต์",
    "07.00 – 11.00",
    "และ",
    "15.00 – 21.00"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#C30E2F] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <Clock className="h-16 w-16 mx-auto md:mx-0 mb-6 text-white/80" />
            {openingTimes.map((line, index) => (
              <p key={index} className="text-xl md:text-2xl mb-2 font-medium">
                {line}
              </p>
            ))}
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ตารางเวลาการให้บริการ
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              We are committed to providing you with ample opportunities to work on your fitness. Check our flexible schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
