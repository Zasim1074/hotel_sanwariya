"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { whatsappNumber1 } from "@/data/contacts";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "",
    rooms: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    if (!formData.checkIn || !formData.checkOut || !formData.rooms) {
      alert("Please fill Check-in, Check-out, and Rooms fields");
      return;
    }

    const text = `New Booking Request from you website:
        Check In: ${formData.checkIn}
        Chek Out: ${formData.checkOut}
        Rooms: ${formData.rooms}
        Adults: ${formData.adults || "Not selected"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber1}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      checkIn: "",
      checkOut: "",
      rooms: "",
      adults: "",
    });
  };

  return (
    <section className="relative w-full">
      <div className="w-full sm:max-w-6xl mx-auto -mt-20 relative z-20 px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">
            {/* Check In */}
            <div className="flex flex-1 sm:flex-col gap-1 items-start">
              <label className="text-lg text-gray-700 font-semibold font-heading">
                Check In:
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className={`w-full border p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-primary/30 focus:border-primary
                ${formData.checkIn === "" ? "text-gray-500" : "text-gray-700"}`}
              />
            </div>

            {/* Check Out */}
            <div className="flex sm:flex-col gap-1 items-start">
              <label className="text-lg text-gray-700 font-semibold font-heading">
                Check Out:
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className={`w-full border p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-primary/30 focus:border-primary
                ${formData.checkOut === "" ? "text-gray-500" : "text-gray-700"}`}
              />
            </div>

            {/* Rooms */}
            <div className="flex sm:flex-col gap-1 items-start">
              <label className="text-lg text-gray-700 font-semibold font-heading">
                Rooms:
              </label>
              <select
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className={`w-full border p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-primary/30 focus:border-primary
                ${formData.rooms === "" ? "text-gray-500" : "text-gray-700"}`}
              >
                <option value="" disabled>
                  Select
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num}>
                    {num} Room{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            {/* Adults */}
            <div className="flex sm:flex-col gap-1 items-start">
              <label className="text-lg text-gray-700 font-semibold font-heading">
                Adults:
              </label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className={`w-full border p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-primary/30 focus:border-primary
                ${formData.adults === "" ? "text-gray-500" : "text-gray-700"}`}
              >
                <option value="" disabled>
                  Select
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num}>
                    {num} Adult{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <Button onClick={handleBooking} variant="primary" size="lg">
              Check
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
