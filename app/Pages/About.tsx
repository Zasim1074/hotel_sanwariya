import Image from "next/image";
import { Button } from "@/components/ui/button";
import room from "@/public/Images/body/room.png";

export default function About() {
  return (
    <section id="about" className="pt-60 sm:pt-40 md:pt-35 lg:pt-50 flex flex-col items-center bg-[#f7f7f7] scroll-mt-24">
      <div className="container grid md:grid-cols-2 gap-12 lg:gap-25 center items-center">
        {/* LEFT IMAGE STACK */}
        <div className="relative flex justify-center">
          {/* Yellow Background Box */}
          <div className="hidden md:block absolute -top-10 right-0 w-52 h-52 bg-primary z-0 rounded-3xl" />

          {/* Dotted Pattern */}
          <div className="hidden md:block absolute -top-10 right-16 w-24 h-24 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-size-[10px_10px] z-0 rounded-full" />

          {/* Main Image */}
          <div className="relative z-10 max-w-md">
            <Image
              src={room}
              alt="Hotel Sanwariya Room"
              width={500}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-5 sm:-bottom-10 right-0 sm:right-[-20] bg-black text-white px-2 sm:px-6 py-2 sm:py-4 rounded-lg shadow-xl max-w-[85vw] sm:max-w-none">
              <h3 className="text-sm sm:text-xl font-sans py-0 sm:py-3">
                10+ Years of Service Experience
              </h3>
            </div>
          </div>

          {/* Dotted Pattern */}
          <div className="hidden md:block absolute -bottom-10 right-0 w-48 h-48 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-size-[10px_10px] z-0 rounded-full" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-2 sm:px-10 md:px-2 sm:mt-10">
          <span className="text-primary text-xl sm:text-2xl md:text-3xl font-semibold sm:font-bold uppercase tracking-widest sm:tracking-normal">
            About Our Hotel
          </span>

          <h2 className="text-base sm:text-xl  font-heading font-bold mt-4 leading-tight">
            Comfortable Stay in Mahalaxmi Nagar, Indore
          </h2>

          <p className="text-muted-foreground mt-4">
            Hotel Sanwariya offers affordable luxury rooms with modern
            amenities, perfect for families, business travelers, and tourists
            visiting Indore.
          </p>

          <p className="text-muted-foreground mt-4">
            Located at 60 Feet Road, Mahalaxmi Nagar, we provide quick booking,
            clean rooms, and 24/7 support to ensure a hassle-free stay.
          </p>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/1sanwariyahotel?utm_source=qr&igsh=N3MwYXo4cTYyc3Mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Learn More →</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
