export default function Cards() {
  return (
    <div className="absolute z-20 bg-black inset-x-0 h-full bg-opacity-90 flex justify-center md:justify-end md:px-20 md:pt-10 md:overflow-y-scroll ">
      <div className="absolute flex flex-col mt-6 space-y-6   ">
        
        <div className="flex relative ">
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
              <p className=" text-2xl tracking-wider ">121321313213</p>
              <div className="flex justify-between">
                <p>Yusuf Doğangüzel</p>
                <p>12/12</p>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
}
