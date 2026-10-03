import { roomImageShowCase } from "@/data/contacts";
import Image from "next/image";

export default function ShowRooms() {
  return (
    <section className=" bg-gray-50">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-10 sm:my-15 md:my-20">
          Room Gallery
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {roomImageShowCase.map((room, index) => (
            <div
              key={index}
              className="group relative w-full h-64 overflow-hidden rounded-none"
            >
              <Image
                src={room}
                alt={`room-${index}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
