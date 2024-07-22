
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}

// createSlice aisa function hai jo slice create karega aur  yis function me hmesa teen object bhejna padta hai
//wo teen object hai "name","initialState" aur "reducer" .
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        }
    }
})

// un sare functionality wale function ko export kar dete hai aur export karne ke liye value hmesa actions se hi niklega ,this is syntax
export const {increment,decrement}=counterSlice.actions

export default counterSlice.reducer; 