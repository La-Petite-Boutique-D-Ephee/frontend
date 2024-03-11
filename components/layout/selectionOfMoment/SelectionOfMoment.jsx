/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/ui/button.jsx";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";
import Image from "next/image.js";
import { useFetch } from "../../../app/hooks/useFetch.js";
import { useShop } from "../../../app/providers/shop.js";
import { Title } from "../../title/Title.jsx";

export function SelectionOfMoment() {
  const cart = useShop((state) => state.cart);
  const addItem = useShop((state) => state.addToCart);

  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products?limit=6",
  );

  const handleAddItem = (product) => {
    addItem(product);
  };

  return (
    <section className="mt-32 md:mt-40">
      <Title
        title="La sélection du moment"
        subtitle="Découvrez nos sélections du moment"
      />
      <div className="mt-16 flex flex-wrap items-center justify-center gap-16">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-[320px] max-h-80 w-[288px] max-w-72 rounded-xl" />
            </div>
          ))}
        {data &&
          data.map((product, index) => {
            return (
              <div
                className="card relative h-[384px] max-h-96 w-[288px] max-w-72 cursor-pointer overflow-hidden rounded-3xl bg-background-500 shadow-md"
                key={index}
              >
                <div className="h-full transition-transform duration-300 ease-in-out hover:scale-125">
                  <Image
                    className="h-full w-full"
                    src={product.image}
                    alt={product.title}
                    priority={true}
                    width={280}
                    height={164}
                  />
                </div>
                <div className="absolute top-60 h-auto w-full rounded-e-3xl bg-background-500 py-8 before:absolute before:-left-12 before:top-top before:block before:h-1/4 before:w-1/4 before:bg-radial-gradient before:content-['']">
                  <div
                    className="absolute bottom-80 right-3 z-[6] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-500 transition-colors duration-300 ease-in-out hover:bg-secondary-500"
                    onClick={() => handleAddItem(product)}
                  >
                    <ShoppingBag color="white" />
                  </div>
                  <div className="flex flex-col gap-4 px-4">
                    <h3 className="line-clamp-1 text-2xl">{product.title}</h3>
                    <p className="text-2xl font-bold text-primary-500">
                      {product.price}€
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-16 flex justify-center">
        <Button className="text-sm uppercase">Voir tout les produits</Button>
      </div>
    </section>
  );
}
