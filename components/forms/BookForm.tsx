"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { roomType, whatsappNumber1 } from "@/data/contacts";
import { capitalizeFirstLetter } from "@/utils/commonFunctions";

export default function BookForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    room_type: "",
    checkin_date: "",
    checkout_date: "",
    adults: "",
    children: "",
    rooms: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    const text = `New Booking Request:
    Name: ${form.name}
    Phone: ${form.phone}
    Room Type: ${form.room_type}
    Check-in: ${form.checkin_date || "Not selected"}
    Check-out: ${form.checkout_date || "Not selected"}
    addults: ${form.adults || "Not selected"}
    children: ${form.children || "Not selected"}
    rooms: ${form.rooms || "Not selected"}  
    Message: ${form.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber1}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      room_type: "",
      checkin_date: "",
      checkout_date: "",
      adults: "",
      children: "",
      rooms: "",
      message: "",
    });
  };

  return (
    <div id="blog" className="bg-white p-8 rounded-xl shadow-lg scroll-mt-30">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">
        Book / Enquire Now
      </h3>

      <div className="space-y-4">
        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name *"
          className="w-full border p-3 rounded-md"
        />

        {/* Phone */}
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          className="w-full border p-3 rounded-md"
        />

        {/* Room Type */}
        <select
          name="room_type"
          value={form.room_type}
          onChange={handleChange}
          className={`w-full border p-3 rounded-md ${form.room_type ? "border-gray-300" : ""} ${form.rooms === "" ? "text-gray-500" : " text-gray-700"}`}
        >
          <option value="" disabled className="">
            Select Room Type
          </option>
          {roomType.map((type, i) => (
            <option key={i} value={type}>
              {capitalizeFirstLetter(type)}
            </option>
          ))}
        </select>

        {/* People */}
        <div className="grid sm:grid-cols-3 gap-2">
          <select
            name="rooms"
            value={form.rooms}
            onChange={handleChange}
            className={`w-full border p-3 rounded-md ${form.rooms ? "border-gray-300" : ""}${form.rooms === "" ? "text-gray-500" : " text-gray-700"}`}
          >
            <option value="" disabled>
              Select Rooms
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num}>{num}</option>
            ))}
          </select>

          <select
            name="adults"
            value={form.adults}
            onChange={handleChange}
            className={`w-full border p-3 rounded-md ${form.adults ? "border-gray-300" : ""}${form.adults === "" ? "text-gray-500" : " text-gray-700"}`}
          >
            <option value="" disabled>
              Select Adults
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num}>{num}</option>
            ))}
          </select>
          <select
            name="children"
            value={form.children}
            onChange={handleChange}
            className={`w-full border p-3 rounded-md ${form.children ? "border-gray-300" : ""}${form.children === "" ? "text-gray-500" : " text-gray-700"}`}
          >
            <option value="" disabled>
              Select Children
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            name="checkin_date"
            value={form.checkin_date}
            onChange={handleChange}
            className={`w-full border p-3 rounded-md ${form.checkin_date === "" ? "text-gray-500" : " text-gray-700"}`}
          />

          <input
            type="date"
            name="checkout_date"
            value={form.checkout_date}
            onChange={handleChange}
            className={`w-full border p-3 rounded-md ${form.checkout_date === "" ? "text-gray-500" : " text-gray-700"}`}
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Additional Message"
          className="w-full border p-3 rounded-md"
          rows={4}
        />

        <Button onClick={handleSubmit} className="w-full">
          Send via WhatsApp →
        </Button>
      </div>
    </div>
  );
}
