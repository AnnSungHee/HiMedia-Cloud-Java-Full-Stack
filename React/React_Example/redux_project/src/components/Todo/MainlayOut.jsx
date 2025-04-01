import { useState } from "react";

import { addTodo, deleteTodo } from "./todoListSlice";
import { useDispatch, useSelector } from "react-redux";
import ListLayOut from "./ListLayOut";

function MainlayOut() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    

    const addTodoList = (e) => {
        e.preventDefault() 
        dispatch(addTodo(inputValue));
    }

    const inputValueChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <h1>To-Do List</h1>
            <form onSubmit={addTodoList}>
                <input
                    onChange={inputValueChange}
                    value={inputValue}
                    name="todo"
                    type="text"
                    placeholder="Add Todo List Here"/>
                <input type="submit" value="Add Todo" />
            </form>
            <ul>
                <ListLayOut/>
                
            </ul>
        </>
    );
}
export default MainlayOut;