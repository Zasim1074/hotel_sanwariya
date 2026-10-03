import EnquiryForm from "@/components/forms/EnquiryForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[89vh] bg-[url('/Images/home/h1_hero.jpg')] bg-cover bg-center "
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* content */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center h-full text-white text-center px-4 gap-4 md:min-h-[89vh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
          WE MAKE LUXURY AFFORDABLE
        </h1>

        <div className="flex flex-col items-center gap-3 mt-6 sm:flex-row sm:gap-4">
          <span className="h-0.5 w-20 md:w-40 bg-primary" />

          <h2 className="text-sm md:text-xl lg:text-2xl tracking-widest text-gray-200 font-sans">
            Top Hotel in Mahalaxmi Nagar
          </h2>

          <span className="h-0.5 w-20 md:w-40 bg-primary" />
        </div>

        {/* Enquiry form */}
        <div className="absolute left-1/2 -bottom-50  sm:bottom-[-90] md:bottom-[-90] w-full max-w-6xl -translate-x-1/2 px-4">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
