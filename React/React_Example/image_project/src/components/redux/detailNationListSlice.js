import { createSlice } from "@reduxjs/toolkit";
import africa1 from "../../media/africa1.jpg"
import africa2 from "../../media/africa2.jpg"
import africa3 from "../../media/africa3.jpg"
import brazil1 from "../../media/brazil1.jpg"
import brazil2 from "../../media/brazil2.jpg"
import brazil3 from "../../media/brazil3.jpg"
import canada1 from "../../media/canada1.jpg"
import canada2 from "../../media/canada2.jpg"
import canada3 from "../../media/canada3.jpg"
import cuba1 from "../../media/cuba1.jpg"
import cuba2 from "../../media/cuba2.jpg"
import cuba3 from "../../media/cuba3.jpg"

const detailNationListSlice = createSlice({
    name: 'detailNation',
    initialState: {
        africa : [
            {id: 1, src: africa1, alt:"africa1"},
            {id: 2, src: africa2, alt:"africa2"},
            {id: 3, src: africa3, alt:"africa3"},
        ],
        brazil : [
            {id: 1, src: brazil1, alt:"brazil1"},
            {id: 2, src: brazil2, alt:"brazil2"},
            {id: 3, src: brazil3, alt:"brazil3"},
        ],
        canada : [
            {id: 1, src: canada1, alt:"canada1"},
            {id: 2, src: canada2, alt:"canada2"},
            {id: 3, src: canada3, alt:"canada3"},
        ],
        cuba : [
            {id: 1, src: cuba1, alt:"cuba1"},
            {id: 2, src: cuba2, alt:"cuba2"},
            {id: 3, src: cuba3, alt:"cuba3"},
        ]
    },
    // 액션함수 생성자 현재는 필요없음
    reducers: {
        // Create
        // Update
        // Delete
    }
});
export default detailNationListSlice.reducer;