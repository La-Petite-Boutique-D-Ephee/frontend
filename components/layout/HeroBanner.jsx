import { Button } from "@/components/ui/button.jsx";

export function HeroBanner() {
  return (
    <section>
      <div className="relative h-[475px]">
        <div className="background"></div>
        <div className="absolute w-full pb-12 top-1/2 left-1/2 container -translate-y-1/2 -translate-x-1/2 md:text-center lg:text-left">
          <h1 className="320:text-2xl 388:text-4xl lg:text-6xl sm:text-center lg:text-left">
            La Petite Boutique D&apos;Ephée
          </h1>
          <p className="mt-7 text-lg lg:ml-0 text-left text-pretty">
            Marie, crée des trésors uniques : produits faits main avec laine et
            pâte Fimo. <br />
            Des créations authentiques, mêlant originalité et qualité
            artisanale.
          </p>
          <div className="mt-16 flex justify-between gap-8 flex-wrap 320:mt-8 sm:justify-center lg:justify-start">
            <Button variant="secondary" size="default">
              Nos produits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
