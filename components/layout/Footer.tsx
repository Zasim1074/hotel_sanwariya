import { message, phone1, phone2, whatsappNumber1 } from "@/data/contacts";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted/40 border-t border-primary mt-0">
      <div className="mx-auto w-full py-10 px-6 sm:px-10 lg:px-20 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-primary text-xl mb-3">
            Hotel Sanwariya
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            We make luxury affordable.
          </p>

          <div className="flex items-center justify-start gap-3 cursor-pointer">
            <a
              href="https://www.oyorooms.com/329670/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Images/footer/oyo.png"
                alt="agoda icon"
                height={50}
                width={50}
              />
            </a>
            <Image
              src="/Images/footer/mmtp.png"
              alt="agoda icon"
              height={50}
              width={50}
            />
            <Image
              src="/Images/footer/agoda.png"
              alt="agoda icon"
              height={50}
              width={50}
            />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-primary text-lg mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#rooms">Rooms</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-primary text-lg mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={`tel:+${phone1}`}
                className="hover:text-primary flex gap-2 items-center"
              >
                <Phone size={14} />
                <span>+91 7224829898</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:+${phone2}`}
                className="hover:text-primary flex gap-2 items-center"
              >
                <Phone size={14} />
                <span>+91 9109754242</span>
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${whatsappNumber1}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 flex gap-2 items-center"
              >
                Chat on WhatsApp
              </a>
            </li>

            <li className="mt-5">
              <a
                key="blog"
                href="#blog"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Button size="md">Book Now</Button>
              </a>
            </li>
          </ul>
        </div>

        {/*  Location */}
        <div>
          <h4 className="font-heading  text-primary text-lg mb-3">
            Our Location
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2 items-start">
              <MapPin size={28} />
              <span>
                Near Lakshya Real Estate, 60 Feet Road, Mahalaxmi Nagar, Indore,
                452010
              </span>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Sanwariya+Hotel/@22.7571124,75.9085452,21z/data=!4m17!1m7!3m6!1s0x39631d40c407b99d:0x24684e2c8b6a71be!2sThe+Pav+Junction!8m2!3d22.7573899!4d75.9079555!16s%2Fg%2F11wv21jfft!3m8!1s0x39631d2d95e9e1e3:0xdb0cf70dc020c21!5m2!4m1!1i2!8m2!3d22.7571789!4d75.908471!16s%2Fg%2F11yj_bd87l?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                className="hover:decoration-underline hover:text-primary"
              >
                View on map
              </a>
            </li>

            <li className="mt-5">
              <a
                href={`https://wa.me/${whatsappNumber1}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="md">
                  WhatsApp
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center text-xs py-4 text-muted-foreground">
        © {new Date().getFullYear()} Hotel Sanwariya. All rights reserved.
      </div>
    </footer>
  );
}
