import React, { memo } from 'react';







const TodoMemo = ({ todos, addTodo }) => {


    console.log("child component render");

    return (
        <>
            <h1>Use Memo Hook Component</h1>

            <h2>My TODOS</h2>

            <hr />


            {
                todos.map((todo,index) => {
                    return (
                        <div key={index}>
                            <div>{todo + index}</div>
                        </div>
                    )
                })
            }


            <button onClick={addTodo}>Add Todo</button>




        </>
    )
}

export default memo(TodoMemo);


// memo is hyer order component hai jis ke ander me 1 component pass kr skta hun ta ke 
// rerender na ho component