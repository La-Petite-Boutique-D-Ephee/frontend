/* eslint-disable react/no-unescaped-entities */
"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image.js";
import { useState } from "react";
import { useShop } from "../../../app/providers/shop.js";

export function Shop() {
  const [active, setActive] = useState(false);
  const cart = useShop((state) => state.cart);
  const total = useShop((state) => state.getTotalProduct());

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="relative hover:text-primary-500 transition-colors duration-300 ease-in-out"
      >
        <ShoppingBag size={20} />
      </div>
      <div
        className={`${
          active
            ? "block absolute h-screen bg-background-500 shadow-md w-[25%] top-40 rounded-md p-4 right-0 -z-10"
            : "hidden"
        }`}
      >
        {cart.length === 0 ? (
          <h1>Vous n'avez pas de produit</h1>
        ) : (
          <ul className="flex flex-col gap-8">
            {cart.map((item) => {
              return (
                <li key={item.id} className="flex items-center gap-8">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="rounded-md block"
                    priority={true}
                  />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.price} €</p>
                    <p>
                      Quantité: <span>{item.quantity}</span>
                    </p>
                    <p>
                      Total Produit:
                      {item.price * item.quantity} €
                    </p>
                  </div>
                </li>
              );
            })}
            <p>
              Total Produits:
              {total} €
            </p>
          </ul>
        )}
      </div>
    </>
  );
}
