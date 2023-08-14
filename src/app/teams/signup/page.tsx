import TeamSignupForm from "@/components/Form/TeamSignupForm";
import Image from "next/image";
import React from "react";
import img from "@/assets/codm4.jpg"

export default function page() {
  return (
    <div className="flex">
      <TeamSignupForm />

      <div className="w-1/2 hidden md:block">
        <Image
          src={img}
          alt="codm player"
          className="object-fill object-center bg-clip-content"
        />
      </div>
    </div>
  );
}
