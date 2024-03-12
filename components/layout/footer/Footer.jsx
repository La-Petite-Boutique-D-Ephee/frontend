import logo from "@/public/assets/images/logo/logo.png";
import Image from "next/image.js";
import { Navigation } from "./navigation.jsx";

export function Footer() {
  return (
    <footer className="mt-32 bg-[#E7E7E7] md:mt-40">
      <div className="pt-16 lg:flex lg:items-center lg:justify-around">
        <div className="mx-auto h-[174px] w-[174px] lg:mx-0">
          <Image
            src={logo}
            alt="Logo de La Petite Boutique D'Ephée"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
        <nav className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-start">
          <Navigation title="Navigation" category="navigation" />
          <Navigation title="Mon Compte" category="compte" />
          <Navigation title="Informations" category="informations" />
        </nav>
      </div>
      <div className="mt-16 pb-8">
        <p className="text-body text-center text-base font-medium">
          © La Petite Boutique D’Ephée - 2024
        </p>
      </div>
    </footer>
  );
}
