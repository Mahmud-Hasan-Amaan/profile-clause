export function NavigationTabs() {
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
    <div className="sticky top-[120px] bg-white z-10 border-b border-[#E2E8F0]">
      <div className="flex overflow-x-auto hide-scrollbar">
        {[
          { name: "Overview", id: "overview" },
          { name: "Services", id: "services" },
          { name: "Education", id: "education" },
          { name: "Experience", id: "experience" },
          { name: "Reviews", id: "reviews" },
        ].map((item, index) => (
          <button
            key={item.name}
            onClick={() => handleScroll(item.id)}
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
  );
}
