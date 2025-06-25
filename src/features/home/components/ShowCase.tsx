"use client";

import tripPhoto from "@/assets/images/tripphoto.webp";
import SearchForm from "@/components/user/search/SearchForm";

export default function Showcase() {
  return (
    <div
      className="min-h-[65vh] flex justify-center items-center bg-cover bg-no-repeat px-4 mb-10"
      style={{
        backgroundImage: `url(${tripPhoto})`,
        backgroundPosition: "center 80%",
      }}
    >
      <div className="w-full max-w-5xl bg-white border border-black rounded-2xl mt-24 p-6">
        <section className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-[#191970]">
            Purchase Your Express Tickets Easily
          </h1>
          <p className="mb-4">
            Find the best deals and travel comfortably with us.
          </p>
          <SearchForm />
        </section>
      </div>
    </div>
  );
}
