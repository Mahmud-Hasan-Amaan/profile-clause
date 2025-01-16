import { ServicesSkeleton } from "./skeletons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Profile } from "@/app/types/types";
import { FileText, Clock, Phone } from "lucide-react";

interface ServicesProps {
  isLoading: boolean;
  setIsBookingOpen: (open: boolean) => void;
  profileData: Profile;
}

const iconMap = {
  fileText: <FileText className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  phone: <Phone className="w-6 h-6" />,
};

export function Services({
  isLoading,
  setIsBookingOpen,
  profileData,
}: ServicesProps) {
  if (isLoading) return <ServicesSkeleton />;

  return (
    <div id="services" className="border border-[#E2E8F0] rounded-lg p-4 mb-6">
      <h2 className="text-[15px] font-medium text-blue-950 mb-6">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profileData.services.map((service) => (
          <Card key={service.title} className="p-6">
            <div className="flex flex-col gap-4">
              <div
                className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center`}
              >
                <div className={service.iconColor}>
                  {iconMap[service.iconType]}
                </div>
              </div>
              <h3 className="text-xl font-medium text-blue-950">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
              <div className="mt-auto">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="text-2xl font-medium">{service.price}</div>
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-[1px] border-solid border-blue-950 rounded-lg"
                  >
                    View Packages
                  </Button>
                  <Button
                    className="flex-1 bg-blue-950 hover:bg-blue-950/90"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    Select Service
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
