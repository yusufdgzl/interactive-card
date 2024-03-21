import { type CardState } from "@/pages";
import { FormEvent, useRef, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type FormCardProps = {
  setCardData: (datas: CardState) => void;
  setSavedSuccesfully: (data: boolean) => void;
};

export default function FormCard({
  setCardData,
  setSavedSuccesfully,
}: FormCardProps) {
  const [errorState, setErrorState] = useState<boolean>(false);
  const [errorAlert,setErrorAlert] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);

  const nameValue = nameRef.current?.value;
  const numberValue = numberRef.current?.value;
  const monthValue = monthRef.current?.value;
  const yearValue = yearRef.current?.value;
  const cvcValue = cvcRef.current?.value;

  function changeHandler() {
    setCardData({
      name: nameRef.current!.value,
      number: +numberRef.current!.value,
      month: +monthRef.current!.value,
      year: +yearRef.current!.value,
      cvc: +cvcRef.current!.value,
    });
  }

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    const inputRefs = [nameRef, numberRef, monthRef, yearRef, cvcRef];
    const anyFieldEmpty = inputRefs.some((ref) => !ref.current!.value);

    if (anyFieldEmpty) {
      setErrorState(true);
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
      return;
    }
    setCardData({
      name: nameRef.current!.value,
      number: +numberRef.current!.value,
      month: +monthRef.current!.value,
      year: +yearRef.current!.value,
      cvc: +cvcRef.current!.value,
    });

    setSavedSuccesfully(true);
  }

  return (
    <>
      <form
        onSubmit={submitHandler}
        onChange={changeHandler}
        className="flex flex-col relative  p-6 pt-32  font-semibold font-mono space-y-8 md:p-40  md:w-3/5  md:mx-auto md:ml-20 "
      >
        {errorAlert && (
          <div className="absolute top-14 w-4/5 md:right-0 md:w-[370px] bg-gray-200  ">
            <Alert variant={"destructive"}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="font-bold">Error!</AlertTitle>
              <AlertDescription>
                Information is missing or incorrect!
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="flex flex-col space-y-2">
          <label className="text-purple-900 tracking-wider" htmlFor="name">
            CARDHOLDER NAME
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Jane Appleseed"
            className={`${
              errorState && !nameValue ? "shadow-red-400" : ""
            } shadow-md border-2 rounded-lg px-4 py-2 w-full focus:outline-none`}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-purple-900 tracking-wider" htmlFor="number">
            CARD NUMBER
          </label>
          <input
            ref={numberRef}
            type="number"
            id="number"
            name="number"
            placeholder="e.g. 1234 5678 9123 0000"
            className={`${
              errorState && !numberValue ? "shadow-red-400" : ""
            } shadow-md  border-2 rounded-lg px-4 py-2 w-full focus:outline-none`}
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
                ref={monthRef}
                className={`${
                  errorState && !monthValue ? "shadow-red-400" : ""
                } shadow-md border-2 rounded-lg px-4 py-2 w-20 focus:outline-none`}
                type="number"
                placeholder="MM"
              />

              <input
                ref={yearRef}
                type="number"
                className={`${
                  errorState && !yearValue ? "shadow-red-400" : ""
                } shadow-md border-2 rounded-lg px-4 py-2 w-20 focus:outline-none`}
                placeholder="YY"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-purple-900 tracking-wider" htmlFor="cvc">
              CVC
            </label>
            <input
              ref={cvcRef}
              className={`${
                errorState && !cvcValue ? "shadow-red-400" : ""
              } shadow-md border-2 appearance-none  rounded-lg px-4 py-2 w-full focus:outline-none`}
              type="number"
              id="cvc"
              name="cvc"
              placeholder="e.g 123"
            />
          </div>
        </div>
        <button className="btn">Confirm</button>
      </form>
    </>
  );
}
