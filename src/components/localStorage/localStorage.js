import React, { useState } from 'react';




const LocalStorage = () => {



    const [language, setLanguage] = useState("");
    const [framework, setFramework] = useState("");



    const saveLanguage = (event) => {
        console.log(event.target.value);
        // let courses = [];
        let courses = JSON.parse(localStorage.getItem("courses") || "[]")
        let course = {
            language: language,
            framework: framework,

        }
        courses.push(course);
        // localStorage.setItem("courses", JSON.stringify(course));
        localStorage.setItem("courses", JSON.stringify(courses));
    }



    // useEffect(() => {
    // }, [])



    return (
        <>

            <div className='flex justify-center'>

                <div className=''>
                    <h1 className='text-4xl'>Local Storage with Arrays and Objects</h1>


                    <div className='mt-10 space-y-2'>

                        <input value={language} onChange={(event) => setLanguage(event.target.value)} className='border border-red-400' type="text" name="" id="" placeholder='language' />
                        <br />
                        <input value={framework} onChange={(event) => setFramework(event.target.value)} className='border border-black' type="text" name="" id="" placeholder='framework' />
                        <br />
                    </div>


                    <div className='flex'>
                        <div className='bg-yellow-200'>
                            {/* <div>{language}</div> */}
                            {/* <div>{framework}</div> */}
                        </div>
                    </div>

                    <div className='mt-5'>
                        <button className='rounded w-40 h-10' onClick={saveLanguage}>SAVE LANGUAGE</button>
                    </div>

                </div>
            </div>


        </>
    )
}



export default LocalStorage;