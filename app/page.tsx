"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { profileData } from "./data/json";
import { ProfileHeader } from "@/components/ProfileHeader";
import { Overview } from "@/components/Overview";
import { Services } from "@/components/Services";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Reviews } from "@/components/Reviews";
import BookingForm from "@/components/select-service";

export default function ProfilePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
      <ProfileHeader
        profileData={profileData}
        isLoading={isLoading}
        setIsBookingOpen={setIsBookingOpen}
      />

      <div className="pt-2">
        <Overview isLoading={isLoading} profileData={profileData} />
        <Services
          isLoading={isLoading}
          setIsBookingOpen={setIsBookingOpen}
          profileData={profileData}
        />
        <Education isLoading={isLoading} profileData={profileData} />
        <Experience isLoading={isLoading} profileData={profileData} />
        <Reviews isLoading={isLoading} />

        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-2xl p-0" title="Book Service">
            <BookingForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
