import { createSlice } from "@reduxjs/toolkit";
import africa from "../../media/africa.jpg";
import brazil from "../../media/brazil.jpg";
import canada from "../../media/canada.jpg";
import cuba from "../../media/cuba.jpg";

const nationSlice = createSlice({
    name: 'nation',
    initialState: {
        nationList: [
            {id: 1, src: africa, nation: "아프리카", link: "/africa"},
            {id: 2, src: brazil, nation: "브라질", link: "/brazil"},
            {id: 3, src: canada, nation: "캐나다", link: "/canada"},
            {id: 4, src: cuba, nation: "쿠바", link: "/cuba"},
        ]
    },
    // 액션함수 생성자 현재는 필요없음
    reducers: {
        // Create
        // Update
        // Delete
    }
});
export default nationSlice.reducer;