import Image from "next/image";
import { Button } from "@/components/ui/button";
import { roomsData } from "@/data/contacts";

export default function Rooms() {
  return (
    <section id="rooms" className="mt-10 md:mt-20 lg:mt-40  bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-0 sm:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Our Rooms
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="group relative w-full h-64 overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {room.title}
                </h3>
                <p className="text-gray-600">
                  <span className="text-lg font-semibold text-gray-900">
                    {room.price}
                  </span>{" "}
                  <span className="text-sm text-gray-400">/ per night</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-15 lg:mt-20 mb-10 ">
          <Button
            size="lg"
            variant="primary"
            className="flex flex-row gap-1 hover:gap-3 hover:scale-105 hover:cursor-pointer"
          >
            <span> Book Now </span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
