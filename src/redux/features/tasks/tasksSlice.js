import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[],
}
const taskSlice=createSlice({
    name:'taskSlice',
    initialState,
    reducers:{
        addTask:(state,{payload})=>{
            state.tasks.push(payload);
        }
    }
})
export const {addTask}=taskSlice.actions;
export default taskSlice.reducer; 