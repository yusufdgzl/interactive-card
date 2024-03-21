import { CardState } from "@/pages"




function CardItem({name,number,month,year}:CardState) {

    return(
        <div className="flex relative cursor-pointer ">
          <img
            className=" w-[270px] md:w-[300px] "
            src="images/bg-card-front.png"
            alt=""
          />
          <div className="flex flex-col absolute  z-10 p-6 md:px-10 w-full h-full text-white justify-between ">
            <div className="flex items-center space-x-5">
              <div className="w-10 h-10 ring-1 rounded-full bg-white"></div>
              <div className="w-4 h-4 rounded-full ring-1 ring-yellow-500"></div>
            </div>
            <div className="flex flex-col space-y-2 ">
              <p className=" text-xl tracking-wider ">{number}</p>
              <div className="flex justify-between">
                <p>{name}</p>
                <p>{month}/{year}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardItem