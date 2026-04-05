"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { roomType } from "@/data/contacts";
import { capitalizeFirstLetter } from "@/utils/commonFunctions";

export default function BookForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      await fetch("https://hook.eu1.make.com/3549fcb6ysg462o6t3p4h2bgvt26a17x", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          room: form.room_type,
          checkin: form.checkin_date,
          checkout: form.checkout_date,
          adults: form.adults,
          children: form.children,
          rooms: form.rooms,
          message: form.message,
        }),
      });

      setShowPopup(true);

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
    } catch (err) {
      alert("Failed to send booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="blog" className="bg-white p-8 rounded-xl shadow-lg ">
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

          <Button onClick={handleSubmit} className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Book →"}
          </Button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <h2 className="text-xl font-bold mb-2">Booking Request Sent</h2>
            <p className="text-gray-600 mb-4">
              Our team will contact you within 5 minutes.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-primary text-white px-6 py-2 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
