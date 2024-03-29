import { CardState } from "@/pages"

type CardItemProps = CardState & {
    setCards: (data:(prev:CardState[]) => CardState[])=> void;
}


function CardItem({name,number,month,year,setCards}:CardItemProps) {

    function deleteCardHandler(name:string){
        setCards((prev)=> prev.filter((cards)=> cards.name !== name))
    }
  
    return(
        <div className="flex relative  ">
          <img
            className=" w-[270px] md:w-[300px] "
            src="images/bg-card-front.png"
            alt=""
          />
          <div className="flex flex-col absolute  z-10 p-6 md:px-10 w-full h-full text-white justify-between ">
            <div className="flex items-center space-x-5">
              <div className="w-7 h-7 ring-1 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full ring-1 ring-yellow-500"></div>
            </div>
            <div className="flex flex-col space-y-2 ">
              <p className=" text-xl tracking-wider ">{number}</p>
              <div className="flex justify-between">
                <p>{name}</p>
                <p>{month}/{year}</p>
              </div>
            </div>
          </div>
         <button onClick={deleteCardHandler.bind(null,name)} className=" absolute right-2  top-2 z-20  hover:translate-y-0">
            <img src="/images/icon-trash.svg" className=" h-6 hover:translate-y-1 7 transition-transform duration-500" alt="" />
         </button>
        </div>
    )
}

export default CardItem