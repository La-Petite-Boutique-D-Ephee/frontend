import { Button } from "@/components/ui/button.jsx";
import Image from "next/image.js";
import svgMobile from "/public/assets/images/background/mobile.svg";

export function HeroBanner() {
  return (
    <section>
      <div className="relative h-[475px]">
        <div className="background"></div>
        <picture className=" w-full absolute -bottom-2 md:-bottom-8 lg:-bottom-0 block">
          <source
            srcSet="/assets/images/background/desktop.svg"
            media="(min-width: 1024px)"
          />
          <Image src={svgMobile} alt="" className="w-full" />
        </picture>

        <div className="absolute w-full pb-12 md:pb-32 top-1/2 left-1/2 container -translate-y-1/2 -translate-x-1/2 md:text-center lg:text-left">
          <h1 className="320:text-2xl 388:text-4xl md:text-5xl lg:text-7xl text-left">
            La Petite Boutique D&apos;Ephée
          </h1>
          <p className="mt-7 text-lg lg:ml-0 text-left text-pretty">
            Marie, crée des trésors uniques : produits faits main avec laine et
            pâte Fimo. <br />
            Des créations authentiques, mêlant originalité et qualité
            artisanale.
          </p>
          <div className="mt-16 flex 320:mt-8 justify-start">
            <Button variant="secondary" size="default">
              Nos produits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
