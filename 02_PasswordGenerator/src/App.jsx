import { useState, useCallback, useEffect, useRef} from 'react';

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [sp, setSp] = useState(false);
  const [Password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (sp) str += "!@#$%^&*()-_=+[]{}`~;,.";
    
    for (let i = 0; i < len; i++) {
      const el = Math.floor(Math.random() * str.length);
      pass += str.charAt(el);
    }
    setPassword(pass);
  }, [len, num, sp, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGen();
  }, [len, num, sp, passwordGen])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Random Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-amber-400 active:bg-blue-200' onClick={copyToClipBoard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={len}
              className='cursor-pointer'
              onChange={(e) => setLen(e.target.value)}
            />
            <label>Length: {len}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              id="numberInput"
              onChange={() => setNum((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={sp}
              id="characterInput"
              onChange={() => setSp((prev) => !prev)}
            />
            <label htmlFor="characterInput">Special Chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
