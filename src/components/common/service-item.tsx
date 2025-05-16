import type { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceItem({ icon: imageUrl, title, description }: ServiceItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 bg-primary/10 rounded-full mb-4">
        <img src={imageUrl} alt="" className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-xl text-primary font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
