import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Slice/SliceCompo"
const Store = configureStore({
    reducer:{
        Student_data : StudentSlice
    }
})
export default Store
