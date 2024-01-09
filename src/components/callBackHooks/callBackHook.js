import React, { useState } from 'react';
import TodoMemo from '../todoMemo/todoMemo';
import { useCallback } from 'react';







const CallBackHook = () => {
    const [counter, setCounter] = useState(0);


    const [todos, setTodos] = useState([]);


    const increament = () => {
        setCounter(counter + 1);
    }


    // improve logic myself
    // const addTodo = () => {
    //     setTodos([...todos,  + 1]);
    // }

    // const addTodo = () => {
    //     setTodos((prev)=>[...prev, `new Entry`]);
    // }
    // ab is me issue hai ke jab be state ki value ko update krty hai to hamara ye wala
    // component rerender horaha hai kyo ke is case me 2 function call horye neche or state 
    // value change horhe hai counter or todos
    // to is se bachne ke leye  
    // useMemo  useCallBack hook use krne hai
    // useMemo return a memorize value 
    // useCallback return a memorize function
    
    
    // yaha zayda values return ho rahe hain blqe 1 poora component return horaha hai  
    // to callback agr 1 value return krne to useMemo
   const addTodo = useCallback(()=>{
        setTodos((prev)=>[...prev, `new Entry`]);

    }, [todos]);

   



    return (
        <>
            <h1>Use CallBack Hook Component</h1>

            <TodoMemo todos={todos} addTodo={addTodo} />

            <hr />

            <div>
                Counter updated Value is : {counter}
            </div>


            <div className='max-w-xs'>
                <button onClick={increament}>Add + </button>
            </div>




         

        </>
    )
}

export default CallBackHook;