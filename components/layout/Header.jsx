import logo from "@/public/assets/images/logo/logo.png";
import Image from "next/image.js";

export function Header() {
  return (
    <header className="bg-background-500/70 backdrop-blur-sm pt-2 pb-6 shadow-md sticky top-0 z-50">
      <Image
        src={logo}
        alt="Logo de La Petite Boutique D'Ephée"
        width={124}
        height={124}
        priority={true}
      />
    </header>
  );
}
