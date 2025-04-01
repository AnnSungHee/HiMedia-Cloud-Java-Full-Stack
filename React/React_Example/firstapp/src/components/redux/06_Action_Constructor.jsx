import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./01_counterSlice";

const dispatch = useDispatch();
// { type: 'counter/increment' } 액션 객체 생성 후 디스패치
dispatch(increment());
// { type: 'counter/decrement' } 액션 객체 생성 후 디스패치
dispatch(decrement());
// { type: 'counter/incrementByAmount' payload: 5 }
dispatch(incrementByAmount(5));