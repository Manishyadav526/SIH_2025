"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { LayoutDashboard, PenBox } from "lucide-react";

export default function Header() {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/alumglobelogo.jpg"
            alt="AlumGlobe logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Right Side (Dashboard + Auth) */}
        <div className="flex items-center gap-4">
          {/* Signed-in Dashboard & Add Transaction buttons */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          {/* Signed-out Auth buttons */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard" mode="modal">
              <button className="px-4 py-2 bg-black text-white rounded-lg">
                Log In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 bg-black text-white rounded-lg">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          {/* Signed-in User button */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}

