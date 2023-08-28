import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const i = useRef(null);
    // useEffect(() =>{
    //      i.current = setInterval(() =>{
    //         console.log("Hi All", Math.random());
    //     }, 1000);

    //     return () => clearInterval(i.current);
    // },[]);

    const ref = useRef(0);
    /*
    not like -> ref=0
    ref = {current:0}
    */

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x = ",x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>

      <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">state = {y}</span>
      </div>


      <div>
        <button
          className="bg-green-200 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref = ",ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button onClick={() =>{
        clearInterval(i.current);
      }} className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg">Stop Printing</button>
    </div>
  );
};

export default Demo2;
