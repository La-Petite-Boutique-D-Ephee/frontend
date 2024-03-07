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
    <header className="bg-background-500/70 backdrop-blur-sm pt-2 pb-6 shadow-md sticky top-0 z-50">
      <div className="sm:container flex justify-between items-center">
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
        <div className="lg:flex items-center gap-8 cursor-pointer hidden">
          {isConnected() ? (
            <Button className="hidden lg:inline-flex font-medium">
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
