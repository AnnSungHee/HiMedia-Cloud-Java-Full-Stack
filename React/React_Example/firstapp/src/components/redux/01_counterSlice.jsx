import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        // 액션 생성자
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});
// 액션생성자와 리듀서를 추출
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;