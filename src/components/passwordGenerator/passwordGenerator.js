import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {


    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);

    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");



    // useRef hook 
    const passwordRef = useRef(null);


    const passwordGenerator = useCallback(() => {
        let pass = "";
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) {
            string += "0123456789"
        }
        if (charAllowed) {
            string += "!@#$%^&*()_+-={}[]|\;:'<>,.?/+-*/=<>≤≥≈≠∑∫√";
        }

        for (let index = 1; index <= length; index++) {
            //ab hame batana apna character yani password

            // +1 ta ke 0 value na aye
            let char = Math.floor(Math.random() * string.length + 1);
            // string ke ander 1 method hota hai charAt or us pe btana ke knsa charcter use krna
           // + is use for append in string 
            pass += string.charAt(char);
            // ye loop jese he khatam hoga to let pass = me value ajaye ge hamary pass 
        }
        // pass ki value set to kr de hamne ab read kese krne hai
        // to uske leye

        setPassword(pass)


    }, [length, numberAllowed, charAllowed, setPassword])


    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])



    const copyPasswordToClipboard = useCallback(() => {
        // how to copy text to clipboard
        window.navigator.clipboard.writeText(password)
        // user ko thora sa acha effect dene ke leye useRef hook istemal hota hai
        // yani apne text copy krna hai to jab ab copy krenge to user ko pata kese lage ga ke text
        // copy howa ke nai to es case me useRef hook istemal hoti hain
        passwordRef.current?.select();
        // ab ap is ko optimize be kr skty hain
        // current value ? optional 
        passwordRef.current?.setSelectionRange(0, 3);
        // is se sirf 3 value tk copy hoga text apke clipboard me 



    }, [password]);


    return (

        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-8 text-orange-500 bg-gray-700'>
                <h1 className='text-4xl text-white text-center my-3'>Password Generator</h1>


                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input type="text" name="" id=""
                        readOnly
                        placeholder='password'
                        value={password} className='outline-none w-full py-1 px-3'
                        ref={passwordRef}
                    />

                    <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5'>copy</button>
                </div>


                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-2'>
                        <input type="range" name="" id=""

                            className='cursor-pointer'
                            // value totaly link hoge length se jo hamne state ke ander banai the
                            value={length}
                            min={6}
                            max={100}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label htmlFor="">Length : {length}</label>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" name="" id="numberInput"
                            defaultChecked={numberAllowed}
                            className='cursor-pointer'
                            // previous value jo be hai usko reverse krdo prev => !prev
                            onChange={() => { setNumberAllowed((prev) => !prev) }}
                        />
                        <label htmlFor="numberInput">Numbers</label>

                    </div>

                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" name="" id="characterInput"
                            defaultChecked={charAllowed}
                            className='cursor-pointer'
                            // previous value jo be hai usko reverse krdo prev => !prev
                            onChange={() => { setCharAllowed((prev) => !prev) }}
                        />
                        <label htmlFor="characterInput">Characters</label>

                    </div>

                </div>


            </div>
        </>
    )
}

export default PasswordGenerator;