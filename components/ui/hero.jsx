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
        Manage Your Finances <br /> with AssetIQ Intelligence
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        AssetIQ is your all-in-one platform to manage assets, track markets, 
        and gain clear insights to make confident financial decisions. 
        Grow your wealth with clarity and control.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
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
      <div className="mt-10">
        <Image
          ref={imageRef}
          src="/landingphoto.webp"
          alt="Banner Image"
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
