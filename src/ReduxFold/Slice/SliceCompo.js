import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name:'Era', age:23, course:"mern" ,batch:"April"},
    {name:'Veer', age:13, course:"mern" ,batch:"April"},
    {name:'Ridh', age:25, course:"mern" ,batch:"April"},
    {name:'Siya', age:26, course:"mern" ,batch:"April"},
    {name:'Veera', age:22, course:"mern" ,batch:"April"}
]
const StudentSlice = createSlice({
    name: "Stu_data",
    initialState,
    reducers:{
        editStudent : (state,action) => {
            state[action.payload.indexGet] = action.payload.info;
            console.log(action.payload.indexGet)
        },
        addStudent : (state,action) => {
            state.push(action.payload)
            console.log(initialState)
        }
    }
})

export const { editStudent ,addStudent} = StudentSlice.actions;
export default StudentSlice.reducer