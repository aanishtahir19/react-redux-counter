import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment: (counter)=> {counter.value+=1},
        decrement: counter => {counter.value-=1},
        incrementByAmount: (counter, action)=>{
            counter.value += Number(action.payload)
        },
        decrementByAmount: (counter, action)=>{
            counter.value -=Number(action.payload)
        }
    }

})
export default slice.reducer;
export const {increment, decrement, incrementByAmount, decrementByAmount} = slice.actions;
export const selectCount = state => state.counter.value;