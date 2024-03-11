import { Button } from "@/components/ui/button.jsx";
import Image from "next/image.js";
import svgMobile from "/public/assets/images/background/mobile.svg";

export function HeroBanner() {
  return (
    <section>
      <div className="relative h-[475px] max-h-[475px]">
        <div className="h-full bg-[url('/assets/images/background/background.png')] bg-cover bg-top bg-no-repeat opacity-30	"></div>
        <picture className="absolute -bottom-2 block w-full md:-bottom-8 lg:-bottom-0">
          <source
            srcSet="/assets/images/background/desktop.svg"
            media="(min-width: 1024px)"
          />
          <Image src={svgMobile} alt="" className="w-full" />
        </picture>

        <div className="container absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 pb-12 md:ml-12 md:pb-32 md:text-center lg:ml-14 lg:text-left">
          <h1 className="text-left text-3xl md:text-5xl lg:text-7xl">
            La Petite Boutique D&apos;Ephée
          </h1>
          <p className="mt-7 text-pretty text-left text-lg lg:ml-0">
            Marie, crée des trésors uniques : produits faits main avec laine et
            pâte Fimo. <br />
            Des créations authentiques, mêlant originalité et qualité
            artisanale.
          </p>
          <div className="mt-16 flex justify-start 320:mt-8">
            <Button variant="secondary" size="default">
              Nos produits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
