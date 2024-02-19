import { Button } from "@/components/ui/button.jsx";
import { ShoppingCart } from "lucide-react";
import Image from "next/image.js";
import { Title } from "../../title/Title.jsx";
import { selectionOfMoment } from "./selectionOfMoment.js";

export function SelectionOfMoment() {
  return (
    <section className="mt-32 md:mt-40">
      <Title
        title="La sélection du moment"
        subtitle="Découvrez nos sélections du moment"
      />
      <div className="flex gap-16 items-center justify-center flex-wrap mt-16">
        {selectionOfMoment.map((selection, index) => {
          return (
            <div className="card" key={index}>
              <div>
                <Image
                  className="h-full w-full"
                  src={selection.thumbnail}
                  alt={selection.title}
                  loading="lazy"
                />
              </div>
              <div className="content py-8">
                <div className="px-4 flex flex-col items-center gap-4">
                  <h3 className="text-2xl">{selection.title}</h3>
                  <span className="block text-body text-lg">
                    {selection.price}€
                  </span>
                  <Button variant="secondary">
                    <ShoppingCart className="mr-4" size={22} />
                    <span className="uppercase text-text-btn">
                      Acheter ce produit
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-16">
        <Button className="uppercase text-sm">Voir tout les produits</Button>
      </div>
    </section>
  );
}
