"use client";

import { FileText, Clock, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { scroller } from "react-scroll";
import { profileData } from "./data/profile";
import BookingForm from "./components/select-service";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, Suspense, useEffect } from "react";
import StudentFeedback from "./components/student-feedback";
import FeedbackSkeleton from "./components/feedback-skeleton";
import ProfileSkeleton from "./components/profile-skeleton";
import ServicesSkeleton from "./components/services-skeleton";
import OverviewSkeleton from "../components/overview-skeleton";
import EducationSkeleton from "../components/education-skeleton";
import ExperienceSkeleton from "../components/experience-skeleton";

export default function ProfilePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -200,
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:px-4">
      <div className="sticky top-0 bg-white z-10 pt-2">
        <button className="flex items-center gap-1.5 text-[13px] mb-6 text-[#64748B]">
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>

        {isLoading ? (
          <ProfileSkeleton />
        ) : (
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-6">
            <div className="flex md:items-center gap-4">
              <div className="relative w-20 md:w-[100px] flex-shrink-0">
                <Image
                  src={profileData.avatar || "/placeholder.svg"}
                  alt="Profile picture"
                  width={100}
                  height={100}
                  className="rounded-full w-full h-auto"
                />
                <div
                  className={`absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full ${
                    profileData.availability.status === "online"
                      ? "bg-[#22C55E]"
                      : "bg-[#94A3B8]"
                  }`}
                />
              </div>

              <div className="flex-shrink">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-[15px] md:text-[17px] font-medium text-blue-950 truncate">
                    {profileData.name}
                  </h1>
                  <Image
                    src={profileData.country.flagUrl || "/placeholder.svg"}
                    alt={`${profileData.country.name} flag`}
                    width={24}
                    height={24}
                    className="rounded-sm flex-shrink-0"
                  />
                </div>
                <p className="text-[12px] md:text-[20x] text-black mb-2">
                  {profileData.available}
                </p>
                <p className="text-[12px] md:text-[13px] text-[#94A3B8]">
                  {profileData.role} @ {profileData.company}
                </p>
              </div>
            </div>

            <div className="w-full md:w-auto md:min-w-[320px] p-3 md:p-4 space-y-3 md:space-y-4 border border-[#E2E8F0] rounded-lg">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <h3 className="text-[13px] md:text-sm font-medium leading-none mb-1 text-blue-950">
                    {profileData.availability.nextAvailable}
                  </h3>
                  <p className="text-[12px] md:text-sm text-muted-foreground">
                    Usually responds within{" "}
                    {profileData.availability.responseTime}
                  </p>
                </div>
                <div className="h-4 w-4 rounded-full bg-green-500" />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-8 md:h-9 text-[12px] md:text-[13px]"
                >
                  Message
                </Button>
                <Button className="flex-1 h-8 md:h-9 text-[12px] md:text-[13px] bg-blue-950">
                  Select Services
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex overflow-x-auto border-b border-[#E2E8F0] mb-8 hide-scrollbar">
          {[
            { name: "Overview", id: "overview" },
            { name: "Services", id: "services" },
            { name: "Education", id: "education" },
            { name: "Experience", id: "experience" },
            { name: "Reviews", id: "reviews" },
          ].map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2.5 text-[13px] ${
                index === 0
                  ? "text-[#0F172A] border-b-2 border-[#0F172A] font-medium"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <div
          id="overview"
          className="border border-[#E2E8F0] rounded-lg p-4 mb-6"
        >
          {isLoading ? (
            <OverviewSkeleton />
          ) : (
            <div className="mb-0">
              <h2 className="text-[15px] font-medium text-blue-950 mb-3">
                Bio
              </h2>
              <p className="text-[13px] text-[#64748B] mb-2 leading-[1.6]">
                Our team will review your application and get back to you within
                1-3 business days. If approved, you&apos;ll gain access to your
                dashboard
              </p>
              <button className="text-[13px] text-[#2563EB] hover:text-[#1D4ED8]">
                Read more
              </button>
            </div>
          )}
        </div>

        <div
          id="services"
          className="border border-[#E2E8F0] rounded-lg p-3 sm:p-4 mb-6"
        >
          <h2 className="text-[15px] font-medium text-blue-950 mb-6">
            Services
          </h2>
          {isLoading ? (
            <ServicesSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-yellow-500" />,
                  title: "Essay Review",
                  price: "$15",
                  description: "Lorem ipsum dolor sit amet consectetur.",
                  iconBg: "bg-blue-50",
                },
                {
                  icon: <Clock className="w-6 h-6 text-green-500" />,
                  title: "1 Hour Session",
                  price: "$15",
                  description: "Lorem ipsum dolor sit amet consectetur.",
                  iconBg: "bg-green-50",
                },
                {
                  icon: <Phone className="w-6 h-6 text-blue-500" />,
                  title: "15 mins Introductory Call",
                  price: "Free",
                  description: "Lorem ipsum dolor sit amet consectetur.",
                  iconBg: "bg-purple-50",
                },
              ].map((service) => (
                <Card key={service.title} className="p-6">
                  <div className="flex flex-col gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center`}
                    >
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="text-xl font-medium text-blue-950">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                    <div className="mt-auto">
                      <div className="mb-4">
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="text-2xl font-medium">
                          {service.price}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex-1 rounded-full"
                        >
                          View Packages
                        </Button>
                        <Button
                          className="flex-1 rounded-full bg-blue-950 hover:bg-blue-950/90"
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
          )}
        </div>

        <div
          id="education"
          className="border border-[#E2E8F0] rounded-lg p-4 mb-6"
        >
          {isLoading ? (
            <EducationSkeleton />
          ) : (
            <>
              <h2 className="text-[15px] font-medium text-blue-950 mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b border-[#E2E8F0] pb-4"
                  >
                    <div className="w-12 h-12 bg-[#FEF2F2] rounded-[6px] flex items-center justify-center">
                      <Image
                        src={edu.logoUrl}
                        alt={`${edu.institution} logo`}
                        width={24}
                        height={24}
                        className="rounded-sm"
                      />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-medium text-blue-950 mb-3">
                        {edu.institution}
                      </h3>
                      <p className="text-[14px] text-[#64748B] mb-3">
                        {edu.degree}
                      </p>
                      <p className="text-[13px] text-[#94A3B8]">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div
          id="experience"
          className="border border-[#E2E8F0] rounded-lg p-4 mb-6"
        >
          {isLoading ? (
            <ExperienceSkeleton />
          ) : (
            <>
              <h2 className="text-[15px] font-medium text-blue-950 mb-6">
                Experience
              </h2>
              {profileData.experience.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-[6px] border border-[#E2E8F0] flex items-center justify-center">
                    <Image
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-blue-950 mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-[13px] text-[#64748B] mb-2">
                      {exp.role}
                    </p>
                    <p className="text-[13px] text-[#94A3B8]">{exp.period}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div id="reviews" className="border border-[#E2E8F0] rounded-lg p-4">
          {isLoading ? (
            <FeedbackSkeleton />
          ) : (
            <Suspense fallback={<FeedbackSkeleton />}>
              <StudentFeedback />
            </Suspense>
          )}
        </div>
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-2xl p-0" title="Book Service">
            <BookingForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
