import { CardState } from "@/pages";


type ComplateStateProps = {
  setCardData: (datas:CardState) => void;
  setSavedSuccesfully: (data:boolean) => void;
}

function ComplateState({setCardData,setSavedSuccesfully}:ComplateStateProps) {

  function continueHandler(){

    setSavedSuccesfully(false);

    setCardData({
      name: '',
      number:'',
      month: 0,
      year: 0,
      cvc: 0,
    });
  }

  return (
    <div className="flex flex-col px-8 my-24 items-center space-y-8 md:w-[390px] md:justify-center md:mx-auto">
      <img src="images/icon-complete.svg" className="w-20" alt="" />
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold tracking-widest">THANK YOU!</h2>
        <p className="text-xl opacity-50 font-semibold ">
          We've added your card details
        </p>
      </div>
      <button onClick={continueHandler} className="btn w-full">Continue</button>
    </div>
  );
}

export default ComplateState;
