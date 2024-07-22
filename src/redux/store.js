import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

//Ek store multiple slices se banta hai 
export  const store=configureStore({
    reducer:{
        counter:CounterSlice  
    },

})
