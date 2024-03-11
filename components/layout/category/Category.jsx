"use client";

import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image.js";
import { category } from "./category.js";

export function Category() {
  return (
    <section className="mt-32 flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center lg:justify-center">
      {category.map((card) => {
        return (
          <Card key={card.id} className="relative w-80 md:max-w-xs lg:max-w-72">
            <Image
              className="w-full object-cover"
              src={card.thumbnail}
              alt={card.title}
              priority="true"
            />
            <CardFooter className="block">
              <CardTitle className="text-body mt-4 text-center text-lg">
                {card.title}
              </CardTitle>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}
