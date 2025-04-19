"use client";

import CustomCarousel from "@/components/ui/custom-carousel";

export function CarouselComponent() {
  const slideData = [
    {
      title: "Track Your Mental Health",
      button: "Start Journey",
      src: "/slider/mentalhealth1.jpg",
    },
    {
      title: "Connect with Experts",
      button: "Meet Doctors",
      src: "/slider/mentalhealth2.jpg",
    },
    {
      title: "Monitor Progress",
      button: "View Analytics",
      src: "/slider/mentalhealth3.jpg",
    },
    {
      title: "Get Support",
      button: "Join Community",
      src: "/slider/mentalhealth4.jpg",
    },
    {
      title: "Stay Mindful",
      button: "Learn More",
      src: "/slider/mentalhealth5.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <CustomCarousel slides={slideData} />
    </div>
  );
}
