

export default function FormCard(){
    
    return(
        <form className="flex flex-col  p-6 pt-20  font-semibold font-mono space-y-8 md:p-40  md:w-3/5  md:mx-auto md:ml-20 ">
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
          <button className="bg-sky-950 py-3 text-white rounded-xl text-md font-sans border-b-4 border-sky-800  hover:border-b-0 hover:border-t-4 hover:border-t-sky-950 shadow-md hover:shadow-sky-600 ">
            Confirm
          </button>
        </form>
    )
}