import React, { useEffect, useState } from 'react'

const Practice = () => {


    const [inputValue, setInputValue] = useState("");
    const [itemsData, setItemsData] = useState("");



    useEffect(() => {

    }, [])


    return (
        <>

            <div>
                <h1>Practice Component</h1>

                <div className='mt-5'>
                    <div className=''>
                        <input value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} type="text" name="" id="" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Practice;