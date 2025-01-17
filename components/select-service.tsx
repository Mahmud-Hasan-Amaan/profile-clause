"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { DialogClose } from "@/components/ui/dialog";
import { BookingSkeleton } from "./skeletons";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
} from "date-fns";
import { profileData } from "@/app/data/json";

export default function BookingForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = React.useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(() => {
    const now = new Date();
    const minutes = Math.floor(now.getMinutes() / 30) * 30;
    return `${now.getHours().toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  });
  const [timeBlockStart, setTimeBlockStart] = useState(() => {
    const currentHour = new Date().getHours();
    return Math.floor(currentHour / 6) * 6;
  });
  const [timeBlockEnd, setTimeBlockEnd] = useState(() => {
    const currentHour = new Date().getHours();
    return Math.min(24, Math.floor(currentHour / 6) * 6 + 6);
  });
  const [selectedService, setSelectedService] = useState<string>("");

  const getDaysInMonth = () => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    return eachDayOfInterval({ start, end });
  };

  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const previousTimeBlock = () => {
    setTimeBlockStart(Math.max(0, timeBlockStart - 6));
    setTimeBlockEnd(Math.max(6, timeBlockEnd - 6));
  };

  const nextTimeBlock = () => {
    setTimeBlockStart(Math.min(18, timeBlockStart + 6));
    setTimeBlockEnd(Math.min(24, timeBlockEnd + 6));
  };

  const generateTimeSlots = () => {
    const slots = [];
    const startTime = timeBlockStart;
    const endTime = timeBlockEnd;
    const interval = 30;

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <BookingSkeleton />;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-xl font-medium text-[#111827]">
              {step === 1 ? "Select Service" : "Select available time"}
            </h2>
            {step !== 1 && (
              <p className="text-sm text-gray-500">
                Please select your preferred date and time
              </p>
            )}
          </div>
          <span className="text-md text-gray-500">Step {step}/3</span>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Provide Details</h3>
              <p className="text-sm text-gray-500">
                Please provide your specific details below.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <Select
                  onValueChange={setSelectedService}
                  value={selectedService}
                >
                  <SelectTrigger className="bg-gray-50 border-0">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {profileData.services.map((service) => (
                      <SelectItem
                        key={service.title}
                        value={service.title.toLowerCase()}
                      >
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Service Details <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Enter here..."
                  className="min-h-[100px] bg-gray-50 border-0 resize-none"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Click to Upload</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Or drag and drop (Max file size: 25 MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {format(currentDate, "MMMM yyyy")}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={previousMonth}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="py-2 text-gray-400 font-medium">
                  {day.charAt(0)}
                </div>
              ))}
              {getDaysInMonth().map((day) => (
                <button
                  key={day.toString()}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "py-2 rounded-md text-sm font-medium",
                    isToday(day) &&
                      !selectedDate &&
                      "ring-2 ring-[#8B141A] ring-offset-2",
                    selectedDate &&
                      format(selectedDate, "yyyy-MM-dd") ===
                        format(day, "yyyy-MM-dd")
                      ? "bg-[#8B141A] text-white"
                      : "hover:bg-gray-100 text-gray-900",
                    isToday(day) && "font-bold"
                  )}
                >
                  {format(day, "d")}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-gray-700">
                Available time slots
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={previousTimeBlock}
                  disabled={timeBlockStart === 0}
                  className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextTimeBlock}
                  disabled={timeBlockEnd === 24}
                  className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {generateTimeSlots().map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "py-3 px-4 rounded-lg text-sm font-medium",
                    time === selectedTime
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

        <div className="flex justify-end pt-6 space-x-3">
          {step !== 2 && (
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              ← Back
            </button>
          )}
          {step === 2 && (
            <DialogClose asChild>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100">
                Cancel <X className="w-4 h-4 ml-1.5 inline-block" />
              </button>
            </DialogClose>
          )}
          {step === 3 ? (
            <DialogClose asChild>
              <button className="px-6 py-2 text-sm font-medium text-white bg-[#0F1C2D] rounded-lg hover:bg-[#0F1C2D]/90">
                Continue →
              </button>
            </DialogClose>
          ) : (
            <button
              onClick={() => setStep(Math.min(3, step + 1))}
              className="px-6 py-2 text-sm font-medium text-white bg-[#0F1C2D] rounded-lg hover:bg-[#0F1C2D]/90"
            >
              Continue →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
