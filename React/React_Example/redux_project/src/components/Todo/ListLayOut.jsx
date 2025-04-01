import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoListSlice";
function ListLayOut() {
    const todoList = useSelector((state) => state.todoList.todoList);
    const dispatch = useDispatch();
    return (
        <>
        {todoList.map((todo) => (
            <li key={todo.id}>{todo.title}
                <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
            </li>
        ))}
        </>
    );
}
export default ListLayOut;