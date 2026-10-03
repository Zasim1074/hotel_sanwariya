import Image from "next/image";
import { Button } from "@/components/ui/button";
import recepction from "@/public/Images/body/reception.png";
import { Phone } from "lucide-react";
import { phone1, servicesData } from "@/data/contacts";
import { capitalizeFirstLetter } from "@/utils/commonFunctions";

export default function Services() {
  return (
    <section id="services" className="py-10 sm:py-20 bg-white">
      <div className="text-center mb-10 sm:mb-20 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Our Services
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 grid gap-10 md:gap-20 lg:gap-10 lg:grid-cols-2 items-center">
        {/*  CONTENT */}
        <div className="bg-gray-100/80 backdrop-blur-md p-4 sm:p-8 md:p-10 rounded-xl shadow-md">
          <p className="text-yellow-600 font-semibold tracking-wider mb-2">
            OUR SERVICES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comfort & Facilities
          </h2>

          <p className="text-gray-600 mb-6">
            Enjoy a comfortable and secure stay with all essential amenities
            designed for modern travelers.
          </p>

          {/* SERVICES LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {servicesData.map((service, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                {capitalizeFirstLetter(service)}
              </div>
            ))}
          </div>

          <Button size="lg">Learn More →</Button>
        </div>

        {/*  IMAGE */}
        <div className="relative mx-auto flex justify-center max-w-xl">
          {/* Yellow Background Box */}
          <div className="hidden md:block absolute -top-10 right-0 w-52 h-52 bg-primary z-0 rounded-3xl" />

          {/* Dotted Pattern */}
          <div className="hidden md:block absolute -top-10 right-30 w-50 h-24 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-size-[10px_10px] z-0 rounded" />

          {/* Main Image */}
          <div className="relative z-10 w-full sm:max-w-117.5">
            <Image
              src={recepction}
              alt="Hotel Sanwariya Room"
              width={470}
              className="rounded-lg shadow-lg object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-5 left-0 sm:left-[-50] bg-primary text-white px-3 sm:px-6 py-2 sm:py-4 rounded-lg shadow-xl max-w-[85vw] sm:max-w-none">
              <h3 className="text-base font-sans">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Phone size={20} />
                  {`+${phone1}`}
                </span>
                <span>Instant Room Service</span>
              </h3>
            </div>
          </div>

          {/* Dotted Pattern */}
          <div className="hidden md:block absolute -bottom-10 right-0 w-48 h-48 bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-size-[10px_10px] z-0 rounded" />
        </div>
      </div>
    </section>
  );
}
