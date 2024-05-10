import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "1234567890"
    if(charAllowed) str+= "~!@#$%^&*()_+";

    for(let i=1;i<length;i++){
      const passLength = Math.floor(Math.random() * str.length);
      pass += str.charAt(passLength);
    }

    setPassword(pass)
  },[length,numbersAllowed,charAllowed])

  const copyPasswordToClipboard = () =>{
    window.navigator.clipboard.writeText(password)
    //To attach a ref
    passwordRef.current?.select()
  }

  useEffect(()=>{
    generatePassword()
  },[length,numbersAllowed,charAllowed])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Enter the Password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            min={6}
            max={50}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={(e) => setNumbersAllowed((prevNumber) => !prevNumber)}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={(e) => setCharAllowed((prevChar) => !prevChar)}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
