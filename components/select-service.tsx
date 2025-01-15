import { Button } from "@/components/ui/button";

export default function BookingForm() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-medium mb-4">Select Service</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Essay Review</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get detailed feedback on your essays
          </p>
          <Button className="w-full">Select</Button>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">1 Hour Session</h3>
          <p className="text-sm text-gray-600 mb-4">
            One-on-one mentoring session
          </p>
          <Button className="w-full">Select</Button>
        </div>
      </div>
    </div>
  );
}
