import { CreditCard, HeartHandshake, Truck } from "lucide-react";

export function Trust() {
  return (
    <section className="mt-32 md:mt-40">
      <div className="flex flex-wrap gap-8 md:justify-around lg:mx-auto lg:w-[82%] lg:justify-between lg:gap-0">
        <div className="flex gap-8 md:max-w-[47%] lg:max-w-[30%]">
          <Truck size={40} color="#5a7354" />
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-lg lg:text-2xl">Expédition gratuit</h3>
            <p className="text-base">
              Livraison gratuite pour toutes les commandes passées en France
              pour un montant de 50 euros
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:max-w-[47%] lg:max-w-[30%]">
          <HeartHandshake size={40} color="#5a7354" />
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-lg lg:text-2xl">100% Fait main</h3>
            <p className="text-base">
              Garantie d’un travail artisanal à la main pour une meilleur
              qualité
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:max-w-[47%] lg:max-w-[30%]">
          <CreditCard size={40} color="#5a7354" />
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-lg lg:text-2xl">Paiement Sécurisé</h3>
            <p className="text-base">
              Tous les paiements sont sécurisés et fiables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
