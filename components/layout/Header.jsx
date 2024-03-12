"use client";
import { Button } from "@/components/ui/button.jsx";
import logo from "@/public/assets/images/logo/logo.png";
import { User } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";
import isConnected from "../../app/utils/isConnected.js";
import { Desktop } from "./navigation/Desktop.jsx";
import { Mobile } from "./navigation/Mobile.jsx";
import { Shop } from "./shop/Shop.jsx";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-500/70 pb-6 pt-2 shadow-md backdrop-blur-sm lg:shadow-none">
      <div className="flex items-center justify-between sm:container">
        <div>
          <Image
            src={logo}
            alt="Logo de La Petite Boutique D'Ephée"
            width={124}
            height={124}
            priority={true}
          />
        </div>
        <Mobile />
        <Desktop />
        <div className="hidden cursor-pointer items-center gap-8 lg:flex">
          {isConnected() ? (
            <Button className="hidden font-medium lg:inline-flex">
              <User size={20} className="mr-4" />
              <Link href="/me">Voir mon profil</Link>
            </Button>
          ) : (
            <Button className="hidden lg:inline-flex">
              <User size={20} className="mr-4" />
              Connexion
            </Button>
          )}
          <Shop />
        </div>
      </div>
    </header>
  );
}
