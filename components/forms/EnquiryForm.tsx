"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    rooms: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    console.log("Booking Data:", formData);
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
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num}>
                    {num} Adult{num > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="flex sm:flex-col gap-1 items-start">
              <label className="text-lg text-gray-700 font-semibold font-heading">
                Children:
              </label>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className={`w-full border p-3 rounded-md outline-none 
                focus:ring-2 focus:ring-primary/30 focus:border-primary
                ${formData.children === "" ? "text-gray-500" : "text-gray-700"}`}
              >
                <option value="" disabled>
                  Select
                </option>
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num}>
                    {num} Child{num !== 1 && "ren"}
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
