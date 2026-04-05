import Link from "next/link";

const message = encodeURIComponent(
  "Hi, I want to book a room at Hotel Sanwariya. Please share availability.",
);

const navigationData = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Rooms", href: "#rooms" },
  { title: "Services", href: "#services" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];
// const navbarHeight = document.getElementById("navbar")?.offsetHeight;
// const sectionTop = document.getElementById("home")?.offsetTop;

// window.scrollTo({
//   top: sectionTop - navbarHeight,
//   behavior: "smooth",
// });

export default function Navbar() {
  return (
    <nav className="hidden md:flex items-center gap-8" id="navbar">
      {navigationData.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
