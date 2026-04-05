import type { Metadata } from "next";
import About from "./about/About";
import Blog from "./blog/Blog";
import Hero from "./home/Hero";
import Rooms from "./rooms/Rooms";
import Services from "./service/Services";
import ShowRooms from "./showRooms/ShowRooms";

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
