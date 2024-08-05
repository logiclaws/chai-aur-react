import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";

    if(isNumberAllowed) str += "0123456789"
    if(isCharAllowed) str += "$#@%!^&*()_!(-~`.,/';[]{}:"

    for(let i=1;i<=length;i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pwd += str.charAt(charIndex);
    }

    setPassword(pwd);

  },[length, isNumberAllowed, isCharAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, isNumberAllowed, isCharAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
             />
             <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed(prev => !prev)
            }}
             />
             <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={isCharAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed(prev => !prev)
            }}
             />
             <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
