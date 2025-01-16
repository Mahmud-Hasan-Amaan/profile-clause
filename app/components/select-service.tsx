"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { DialogClose } from "@/components/ui/dialog";
import { BookingSkeleton } from "./skeletons";

export default function BookingForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState(4);
  const [selectedTime, setSelectedTime] = React.useState("15:00");

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <BookingSkeleton />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center pb-2">
          <div className="space-y-1">
            <h2 className="text-xl font-medium text-[#111827] font-clash">
              {step === 2 ? "Select Date" : "Select available time"}
            </h2>
            <p className="text-sm text-gray-500">
              Please select your preferred date and time
            </p>
          </div>
          <span className="text-sm text-gray-500">Step {step}/3</span>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium font-clash">
                Provide Details
              </h3>
              <p className="text-sm text-muted-foreground">
                Please provide your specific details below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium font-clash">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essay">Essay review</SelectItem>
                    <SelectItem value="session">1 hour sessions</SelectItem>
                    <SelectItem value="call">
                      15 mins Introductory Call
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium font-clash">
                  Service Details <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Enter here..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <div className="mt-4">
                  <Button variant="outline">Click to Upload</Button>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    (Max file size: 25 MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendar View - Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                December 2024
              </h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="py-2 text-gray-400 font-medium">
                  {day.charAt(0)}
                </div>
              ))}
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "py-2 rounded-md text-sm font-medium",
                    selectedDate === day
                      ? "bg-[#8B141A] text-white"
                      : "hover:bg-gray-100 text-gray-900"
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Time Slots - Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">
                Available time slots
              </h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "py-3 px-4 rounded-lg text-sm font-medium",
                    selectedTime === time
                      ? "bg-[#8B141A] text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg",
              step === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
            )}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </button>

          <div className="flex gap-2">
            {step === 2 && (
              <button
                onClick={() => window.history.back()}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            )}
            {step === 3 ? (
              <DialogClose asChild>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0F1C2D] rounded-lg hover:bg-[#0F1C2D]/90">
                  Complete Booking <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </DialogClose>
            ) : (
              <button
                onClick={() => setStep(Math.min(3, step + 1))}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#0F1C2D] rounded-lg hover:bg-[#0F1C2D]/90"
              >
                Continue <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
