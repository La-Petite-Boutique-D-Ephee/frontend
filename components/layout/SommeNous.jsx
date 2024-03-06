import { Button } from "@/components/ui/button.jsx";
import sommeNous from "@/public/assets/images/Qui sommes nous.png";
import Image from "next/image.js";
import { Title } from "../title/Title.jsx";

export function SommeNous() {
  return (
    <section className="mt-32 md:mt-40">
      <Title
        title="Qui sommes nous"
        subtitle="Découvrez nous"
        styleTitle="lg:hidden"
      />
      <div className="flex flex-col gap-8 mt-8 justify-center md:flex-row md:gap-16 lg:items-center">
        <div className="lg:w-[500px]">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={sommeNous}
            priority="true"
            alt="Qui sommes nous"
          />
        </div>
        <div className="md:w-1/2">
          <Title
            title="Qui sommes nous"
            subtitle="Découvrez nous"
            styleTitle="hidden lg:block lg:text-left lg:mb-8"
            styleSubtitle="hidden"
            h2="lg:text-4xl"
          />
          <p className="text-body text-base text-center md:text-left">
            Je suis un passionné du tricot, créant des pièces uniques <br />
            avec une fusion de textures et de couleurs. <br /> Mon art du tricot
            combine tradition et modernité, <br /> avec une attention minutieuse
            aux détails <br />
            pour offrir des créations chaleureuses et uniques.
          </p>
          <div className="flex justify-center mt-16 md:justify-start">
            <Button size="lg">En savoir plus</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
