import React, { useEffect, useState } from 'react';
import todo from "../../assets/todo.svg";



// to get the data from localstorage
const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    // ab yaha pe data hame array me chahye lekin ye string me araha hai to ab is ko array me convert krna hai
    //JSON.parse()


    // agr mujhe data milta hai to if data return kr do bs 

    if (list) {
        return JSON.parse(localStorage.getItem("lists"));
    }
    // agr kuch be data nai hai to 
    else {
        return []
    }


}




const Todo = () => {



    const [inputData, setInputData] = useState("");
    // const [items, setItems] = useState([]);
    const [items, setItems] = useState(getLocalItems());     // ab yaha pe data hame array me chahye


    const [toogleSubmit, setToogleSubmit] = useState(true);


    const [isEditItem, setIsEditItem] = useState(null);







    const addItem = () => {
        // previous state ka data show krne ke leye ...items,
        // inputData jo user enter kr raha hai'
        if (!inputData) {
            alert("Please enter a valid todo list name");
        }
        // sab se last step else if
        // ab yaha haam else if laga denge kyo ke ye new field add krta jaye ga lekin hamy jo item update krne usi field me add ho
        // es ke leye else if 
        // sab se pehle input filed me kuch na kuch hona chahyee
        // agr ye true hai it means plus wala button hai or agr ye false hai to ye edit wala button hai jo hamy chaye
        // to mujhe tooglemode ke sath not operator use krna hai
        else if (inputData && !toogleSubmit) {
            // ab mene apple pe click kya to mujhe sirf usi ka data change krwana hai
            // or wo me sirf or sirf setItems ke through he kr sakta hun 
            // or ab mujhe findout krna hai ke mere jitne be elements hai us me se hamne kis ko click kiya hai update krne keleye
            // to us ke leye map method add krne laga hu
            setItems(
                items.map((element) => {
                    // element.id agr isEditem se match kr gye
                    if (element.id === isEditItem) {
                        // ab updated data add krna hai // Update the item with new data
                        return { ...element, name: inputData }
                    }
                    // ab map method me kuch na kuch to return hoga he
                    return element;
                })

            )
            // ab field ko khali kerna hai
            setToogleSubmit(true);
            setInputData("");
            setIsEditItem(null);

        }

        else {
            // ...items is se purane items pe show hoge nai to ye ese item me new dal dega agr ye na likha
            // setItems([...items, inputData]);
            // input ko khale krne ke leye
            // setInputData("");

            // CRUD 
            // now we add id for delete 
            // time milisecond 
            // convert time to string for proper data
            // now jab be ham object create krty hai to ye key value dene prte hai name:
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData("");


        }
    }


    // const deleteItem = (id) => {
    // ye jo id hai es se match nai hona chaye ind number
    // console.log("Delete Items id", id);

    // const updatedItems = items.filter((element, ind) => {
    // return ind !== id;
    //    filter ke ander mera jo be index number wo agr is (id) se match nahi krta to sirf ese ko return kro
    // baqi sab hata do
    // agr match nahi hota to wo hmy return hoga
    // })
    // 
    // setItems(updatedItems);
    // }


    // Update CRUD
    const deleteItem = (index) => {
        console.log("Delete Items index===>", index);
        const updatedItems = items.filter((element) => {
            return index !== element.id;
            // index element.id se agr match ne krta to jitne be match ne krte wo ui me show krwa do nai to 
            // es waly do delete krdo
        })
        setItems(updatedItems);
        // console.log("new updated Items ====>", updatedItems);
    }


    const removeAll = () => {
        setItems([]);
    }


    // add data local storage
    // jab be mere items ki value change hoge to mujhe useEffect ke through local storage me data save/add krwana hai 
    //  
    useEffect(() => {
        console.log("Items updated:", items);
        // itna apko yaad rkhna hai ke localstorage me data hamesha string "" ki form me he store hota hai 
        // so ap kuch be name de skty hain list likh len ye apka key hai dosra value add krne hai items
        // lekin yaha localstorage me items simple pass ne kr skta kyo ke yaha sirf "" he pass hoti hai
        // localStorage.setItem("lists", items);
        localStorage.setItem("lists", JSON.stringify(items));

    }, [items])

    // jab be items ki value change hoge to mujhe mere local storage me data ko save krwana hai




    // edit the item
    // When user click on the edit button
    // 1: get the id and name of the data which user clicked to edit 
    // 2: set the toogle mode to change the submit button into edit button 
    // 3: Now update the value of the setInput with the new updated value to edit.
    // 4: To pass the current element Id to new state variable for reference.





    // CRUD
    // edit updateHandler
    const editItem = (id) => {
        console.log("need to update items, item ki id mil rahe hai ya nai ok mil gaye", id);
        // two method finbyid or filter
        let newEditItem = items.find((element) => {
            console.log("kya element mila ke nai", element);
            return element.id === id;
            // element.id kis se match hone chahye jo hmne get kr rkhe hai pehle se uper (id)
            // items ke ander jo be id hai jis id me be user ne click kya to wo is (id) se agr match kr jate hai to
            // usko return do to mujhe ye data mil jaye ga  
        });
        console.log("edit item id ===>", newEditItem);

        setToogleSubmit(false);

        // is ke baad user jo be value likha raha hai usko update krna hai 
        setInputData(newEditItem.name);

        // ab jo user value likha raha update us ko change krke set krwana
        setIsEditItem(id);

    }



    // cta updateHandler sr naveed
    // const editUpdateItem =(id)=>{
    //     let newEditItem = items.map((element) => {
    //        if (isEditItem === id) {
    //         console.log("kya element mila ke nai",element);
    //         return newEditItem;
    //        }
    //        else {
    //         return element;
    //        }
    //     });
    //     setToogleSubmit(false);
    //     setInputData(newEditItem.name);
    //     setIsEditItem(id);

    // }

    return (
        <>

            <div className='bg-purple-950'>
                <div className='flex flex-col justify-center items-center'>
                    <figure>
                        <img src={todo} alt="todoLogo" />
                        <figcaption className='text-white'>Add your list here ✌️</figcaption>
                    </figure>
                    <div className='flex relative items-center'>
                        <input type="text" className='p-5' placeholder='✌️ write Add Items ...' value={inputData} onChange={(event) => setInputData(event.target.value)} />

                        {
                            toogleSubmit ?
                                <i className="fas fa-plus absolute right-6 text-black" title='Add Items' onClick={addItem}></i>
                                :
                                <i className="far fa-edit absolute right-6 text-green-600" title='Update Items' onClick={addItem}></i>
                        }

                    </div>


                    <div className=''>
                        <div className='flex flex-col  items-center'>
                            {/* <h3>apple</h3>
                            <i className="far fa-trash-alt" title='Delete Items'></i> */}

                            {/* {
                                items.map((item, index) => {
                                    return (
                                        <div key={index} className='flex justify-between w-[100%] mt-10 items-center bg-blue-900 hover:bg-gray-300 rounded-xl text-white' >
                                            <h3 className='px-8 py-4'>{item}</h3>
                                            <i className="far fa-trash-alt px-8 py-4 text-white hover:text-red-600" title='Delete Items' onClick={() => deleteItem(index)}></i>
                                        </div>
                                    )
                                })
                            } */}

                            {/* CRUD UPDATE */}

                            {
                                items.map((item) => {
                                    return (
                                        <div key={item.id} className='flex justify-between w-[100%] mt-10 items-center bg-blue-900 hover:bg-gray-300 rounded-xl text-white' >
                                            <h3 className='px-8 py-4'>{item.name}</h3>
                                            <div className='flex'>
                                                <i className="far fa-edit px-2 py-4  text-white hover:text-green-600" title='Edit Items' onClick={() => editItem(item.id)}></i>
                                                <i className="far fa-trash-alt px-3 py-4  text-white hover:text-red-600" title='Delete Items' onClick={() => deleteItem(item.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>




                    <div className='mt-10'>
                        <button className='' data-sm-link-text="Remove All" onClick={removeAll}><span>Delete all List</span></button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Todo;