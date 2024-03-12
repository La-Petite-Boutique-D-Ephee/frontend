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
      <div className="mt-8 flex flex-col justify-center gap-8 md:flex-row md:gap-16 lg:items-center">
        <div className="lg:w-full lg:max-w-[500px]">
          <Image
            className="h-full w-full rounded-lg object-cover"
            src={sommeNous}
            priority="true"
            alt="Qui sommes nous"
          />
        </div>
        <div>
          <Title
            title="Qui sommes nous"
            subtitle="Découvrez nous"
            styleTitle="hidden lg:block lg:text-left lg:mb-8"
            styleSubtitle="hidden"
            h2="lg:text-4xl"
          />
          <p className="text-body text-center text-base md:text-left">
            Je suis un passionné du tricot, créant des pièces uniques <br />
            avec une fusion de textures et de couleurs. <br /> Mon art du tricot
            combine tradition et modernité, <br /> avec une attention minutieuse
            aux détails <br />
            pour offrir des créations chaleureuses et uniques.
          </p>
          <div className="mt-16 flex justify-center md:justify-start">
            <Button size="lg">En savoir plus</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
