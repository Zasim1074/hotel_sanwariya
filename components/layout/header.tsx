"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
import { message, whatsappNumber1 } from "@/data/contacts";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigationData = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Rooms", href: "#rooms" },
  { title: "Services", href: "#services" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex w-full flex-col gap-4 px-6 py-4 lg:py-6 lg:px-20">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-extrabold font-heading">
            Hotel Sanwariya
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-20">
              <Navbar />
              <div className="flex gap-3">
                <a
                  href="#blog"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  <Button size="md">Book Now</Button>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber1}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="md">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-muted-foreground shadow-sm transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/60 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-3 rounded-xl border border-border bg-white/95 p-4 shadow-lg">
            {navigationData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex gap-2">
              <a href="#blog" className="inline-flex w-full justify-center">
                <Button size="md" className="w-full">
                  Book Now
                </Button>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber1}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center"
              >
                <Button variant="whatsapp" size="md" className="w-full">
                  WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
