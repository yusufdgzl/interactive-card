export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-slate-300 min-h-screen ">
      <div className="flex flex-col w-full bg-white md:flex-row max-w-[1200px] ">
        <div className="relative w-full">
          <img
            className="hidden  md:flex max-h-[700px] "
            src="/images/bg-main-desktop.png"
            alt=""
          />
          <img
            className="md:hidden w-full"
            src="/images/bg-main-mobile.png "
            alt=""
          />
          <img
            className=" w-[340px] md:w-[400px] absolute top-10 right-6 md:top-auto md:-right-14 md:bottom-[110px] "
            src="images/bg-card-back.png"
            alt=""
          />
          <img
            className=" w-[340px] md:w-[400px] absolute -bottom-10 left-6 md:left-auto md:bottom-auto md:top-32 md:right-7  "
            src="images/bg-card-front.png"
            alt=""
          />
        </div>

        <div className="flex flex-col w-full p-6 pt-20  font-semibold font-mono space-y-8 md:p-40  ">
          <div className="flex flex-col space-y-2">
            <label className="text-purple-900 tracking-wider" htmlFor="name">
              CARDHOLDER NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Jane Appleseed"
              className="border-2 rounded-lg px-4 py-2 w-full focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-purple-900 tracking-wider" htmlFor="number">
              CARD NUMBER
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="e.g. 1234 5678 9123 0000"
              className="border-2 rounded-lg px-4 w-full py-2 focus:outline-none"
            />
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col ">
              <label
                className="text-purple-900 tracking-wider"
                htmlFor="dateMonth"
              >
                EXP. DATE (MM/YY){" "}
              </label>
              <div className="flex space-x-3 ">
                <input
                  className="border-2 rounded-lg px-4 py-2 w-20 focus:outline-none"
                  type="number"
                  placeholder="MM"
                />
                <input
                  type="number"
                  className="border-2 rounded-lg w-20 px-4 py-2 focus:outline-none"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-purple-900 tracking-wider" htmlFor="cvc">
                CVC
              </label>
              <input
                className="border-2 rounded-lg px-4 py-2 w-full  focus:outline-none"
                type="number"
                id="cvc"
                name="cvc"
                placeholder="e.g 123"
              />
            </div>
          </div>
          <button className="bg-sky-950 py-3 text-white rounded-xl text-md font-sans border-b-4 border-sky-800  hover:border-b-0 hover:border-t-4 hover:border-t-sky-950 shadow-md hover:shadow-sky-600 ">Confirm</button>
        </div>
      </div>
    </div>
  );
}
