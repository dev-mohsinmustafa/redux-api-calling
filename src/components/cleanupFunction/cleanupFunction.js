import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {


    const [windowCount, setWindowCount] = useState(window.screen.width)


    const actualWidth = () => {
        // console.log("I am a width");
        console.log(window.innerWidth);
        setWindowCount(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth);
        console.log("add event");
        
        // cleanup function is se browser me repetition ne hoge  
        return ()=>{
            window.removeEventListener("resize", actualWidth);
            console.log("remove event");
        }

    })


    return (
        <>
            <div className=''>
                <h1>The actual size of the window is : </h1>
                <div>{windowCount}</div>
            </div>

        </>
    )
}

export default CleanupFunction;