import { CardState } from "@/pages";
import CardItem from "./CardItem";
import { useState } from "react";

type CardsProps = {
  cards: CardState[];
  setCards:(data:(prev:CardState[]) => CardState[])=> void
};

export default function Cards({ cards ,setCards}: CardsProps) {
  
   
  return (
    <div className=" absolute z-20 bg-black inset-x-0 h-full bg-opacity-90 flex justify-center md:justify-end md:px-20 md:pt-10 md:overflow-y-scroll ">
      <div className="absolute flex flex-col mt-6 space-y-6   ">
        {
          cards.map(card => <CardItem key={card.name} {...card} setCards={setCards}/>) 
        }
      </div>
    </div>
  );
}
