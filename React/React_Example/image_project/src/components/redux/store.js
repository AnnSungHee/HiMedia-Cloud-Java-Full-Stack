import { configureStore } from "@reduxjs/toolkit";
import nationReducer from "./nationSlice"
import detailNationListReducer from "./detailNationListSlice"

const store = configureStore({
    reducer:{
        nation: nationReducer,
        detailNationList : detailNationListReducer
    }
});

export default store;