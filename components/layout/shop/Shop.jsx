/* eslint-disable react/no-unescaped-entities */
"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { useShop } from "../../../app/providers/shop.js";
import { Button } from "../../ui/button.jsx";

export function Shop() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useShop((state) => state.cart);
  const total = useShop((state) => state.getTotalProduct());

  const backgroundRef = useRef(null);
  const bodyRef = useRef(null);

  const ACTIVE_CLASS = "active";
  const NO_SCROLL_CLASS = "no-scroll-bag";

  const handleClick = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const background = (backgroundRef.current =
      document.querySelector("#backgroundShop"));
    const body = (bodyRef.current = document.querySelector("html"));

    if (background && body) {
      if (isOpen) {
        background.classList.add(ACTIVE_CLASS);
        body.classList.add(NO_SCROLL_CLASS);
      } else {
        background.classList.remove(ACTIVE_CLASS);
        body.classList.remove(NO_SCROLL_CLASS);
      }
    }

    return () => {
      if (background && body) {
        background.classList.remove(ACTIVE_CLASS);
        body.classList.remove(NO_SCROLL_CLASS);
      }
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleClick}
        className="relative hidden transition-colors duration-300 ease-in-out hover:text-primary-500 lg:block"
      >
        <ShoppingBag size={20} />
      </div>
      <div
        className={`shop absolute top-0 z-10 flex h-screen w-[25%] flex-col items-center justify-center rounded-md bg-background-500 p-4  shadow-md ${
          isOpen ? "active " : ""
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
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="block rounded-md"
                    priority={true}
                  />
                  <div>
                    <p className="text-base font-bold">{item.title}</p>
                    <div className="flex w-24 items-center bg-blue-500">
                      <Plus />
                      <input
                        type="number"
                        className="w-full bg-red-500"
                        defaultValue={item.quantity}
                        readOnly
                      />
                      <Minus />
                    </div>
                    <p>
                      Quantité: <span>{item.quantity}</span>
                    </p>
                    <p className="text-base">{item.price * item.quantity} €</p>
                  </div>
                </li>
              );
            })}
            <div className="mt-8 flex flex-row justify-between">
              <p className="text-base uppercase">Totals:</p>
              <p className="text-base font-bold"> {total} €</p>
            </div>
          </ul>
        )}
        <Button variant="secondary" size="lg" className="mt-8 w-full">
          Payer
        </Button>
      </div>
      <div
        onClick={handleClick}
        id="backgroundShop"
        className="backgroundShop cursor-pointer"
      ></div>
    </>
  );
}
