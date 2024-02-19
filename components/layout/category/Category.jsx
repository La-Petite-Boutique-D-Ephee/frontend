"use client";

import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image.js";
import { category } from "./category.js";

export function Category() {
  return (
    <section className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center lg:justify-center mt-32">
      {category.map((card) => {
        return (
          <Card key={card.id} className="w-3/4 md:w-[47%] lg:w-[22%] relative">
            <Image
              className="w-full object-cover"
              src={card.thumbnail}
              alt={card.title}
              priority="true"
            />
            <CardFooter className="block">
              <CardTitle className="text-body text-lg text-center mt-4">
                {card.title}
              </CardTitle>
            </CardFooter>
          </Card>
        );
      })}
    </section>
  );
}
