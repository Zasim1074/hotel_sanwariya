"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { customersData } from "@/data/contacts";
import EnquiryForm from "@/components/forms/BookForm";

export default function Blog() {
  const [current, setCurrent] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % customersData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const item = customersData[current];

  return (
    <section className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT - TESTIMONIAL CAROUSEL */}
        <div className="flex-1 text-center lg:text-left relative">
          <div className="text-center mb-25">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              Blogs
            </h2>
          </div>

          <div className="relative z-10 transition-all duration-500">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-full mb-4 flex-1 mx-auto"
            />

            <div className="flex flex-col mt-5 justify-center lg:justify-center gap-1 text-yellow-500 mb-3">
              <span> {"★".repeat(item.rating)}</span>

              <h4 className="font-bold text-gray-800">
                {item.name}{" "}
                <span className="text-gray-500 font-normal">, {item.type}</span>
              </h4>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 ">
              {item.review}
            </p>
          </div>

          {/* DOTS */}
          <div className="flex justify-center lg:justify-start gap-2 mt-6">
            {customersData.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === current ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - FORM */}
        <EnquiryForm />
      </div>
    </section>
  );
}
