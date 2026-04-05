import type { Metadata } from "next";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Hero from "./Pages/Hero";
import Rooms from "./Pages/Rooms";
import Services from "./Pages/Services";
import ShowRooms from "./Pages/ShowRooms";

export const metadata: Metadata = {
  title: "Hotel Sanwariya | Home",
  description:
    "Explore Hotel Sanwariya in Mahalaxmi Nagar, Indore. Comfortable rooms, fast bookings, and warm hospitality for families and travelers.",
  openGraph: {
    title: "Hotel Sanwariya | Home",
    description:
      "Explore Hotel Sanwariya in Mahalaxmi Nagar, Indore. Comfortable rooms, fast bookings, and warm hospitality for families and travelers.",
    type: "website",
    url: "https://hotel-sanwariya.com/",
    images: [
      {
        url: "/Images/home/h1_hero.jpg",
        alt: "Hotel Sanwariya hero image",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Blog />
      <ShowRooms />
    </>
  );
}
