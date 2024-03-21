import Cards from "@/components/Cards";
import ComplateState from "@/components/ComplateState";
import FormCard from "@/components/FormCard";
import { useState } from "react";

export type CardState = {
  name: string;
  number: string;
  month: number;
  year: number;
  cvc: number;
};

export default function HomePage() {
  const [cardData, setCardData] = useState<CardState>();
  const [cards, setCards] = useState<CardState[]>([]);

  const [savedSuccesfully, setSavedSuccesfully] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center p-6 bg-slate-300 min-h-screen ">
      <div className="flex relative flex-col w-full bg-white md:flex-row max-w-[1200px] ">
        <Cards cards={cards} />

        <div className="relative ">
          <img
            className="hidden md:flex md:h-[700px] "
            src="/images/bg-main-desktop.png"
            alt=""
          />
          <img
            className="md:hidden w-full"
            src="/images/bg-main-mobile.png "
            alt=""
          />
          <div className="absolute top-10 right-6 md:top-auto md:-right-44 md:bottom-[140px] ">
            <div className="relative ">
              <img
                className=" w-[340px] md:w-[360px] "
                src="images/bg-card-back.png"
                alt=""
              />
              <p className="absolute z-10 text-white tracking-wider right-10 top-20 md:top-[86px]  ">
                {cardData?.cvc}
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 left-6 md:left-auto md:bottom-auto md:top-32 md:-right-24  ">
            <div className="flex relative">
              <img
                className=" w-[340px] md:w-[360px] "
                src="images/bg-card-front.png"
                alt=""
              />
              <div className="flex flex-col absolute  z-10 p-6 md:px-10 w-full h-full text-white justify-between ">
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 ring-1 rounded-full bg-white"></div>
                  <div className="w-4 h-4 rounded-full ring-1 ring-yellow-500"></div>
                </div>
                <div className="flex flex-col space-y-2 ">
                  <p className=" text-2xl tracking-wider ">
                    {cardData?.number.valueOf()}
                  </p>
                  <div className="flex justify-between">
                    <p>{cardData?.name.toUpperCase()}</p>
                    <p>
                      {cardData?.month}/{cardData?.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {savedSuccesfully ? (
          <ComplateState
            setCardData={setCardData}
            setSavedSuccesfully={setSavedSuccesfully}
          />
        ) : (
          <FormCard
            setSavedSuccesfully={setSavedSuccesfully}
            setCardData={setCardData}
            setCards={setCards}
          />
        )}
      </div>
    </div>
  );
}
