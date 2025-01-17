import React, { useState, useEffect } from "react";

export function NavigationTabs() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "services",
        "education",
        "experience",
        "reviews",
      ];
      const header = document.querySelector(".sticky-header");
      const headerOffset = header?.clientHeight || 0;

      // Find the section that is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset + 100 && rect.bottom >= headerOffset) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (targetPosition: number, duration: number = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    const header = document.querySelector(".sticky-header");
    const headerOffset = header?.clientHeight || 0;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset - 20;

      smoothScroll(offsetPosition);
    }
  };

  return (
    <div className="sticky bg-white z-10 border-b border-[#E2E8F0]">
      <div className="flex overflow-x-auto hide-scrollbar">
        {[
          { name: "Overview", id: "overview" },
          { name: "Services", id: "services" },
          { name: "Education", id: "education" },
          { name: "Experience", id: "experience" },
          { name: "Reviews", id: "reviews" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleScroll(item.id)}
            className={`px-5 py-2.5 text-[13px] transition-all duration-300 ease-in-out ${
              item.id === activeSection
                ? "text-blue-950 border-b-2 border-blue-950 font-medium"
                : "text-gray-500 hover:text-blue-950 font-medium"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
