"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-50 w-full min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-0">
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl pb-6 font-extrabold" style={{ color: "#ca80ff" }}>
        Your Alumni. Your Network. <br />   Your Strength
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Unite, mentor, and grow with our next-gen alumni ecosystem
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 flex-col md:flex-row gap-4 mt-6">
        <Link href="/dashboard">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/manish-yadav-7b2262274"
          target="_blank"
        >
          <Button size="lg" variant="outline" className="px-8">
            Connect With Us
          </Button>
        </Link>
      </div>

      {/* Banner Image */}
      <div className="hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
        <Image
          ref={imageRef}
          src="/mainphoto.jpg"
          alt="Banner Image"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
