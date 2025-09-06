import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header"; // matches your Header.jsx

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlumGlobe",
  description: "AlumGlobe - Your Alumni. Your Network. Your Strength",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made In Greater Noida With ♥</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
