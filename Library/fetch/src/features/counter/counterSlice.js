import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchIncrement = createAsyncThunk('counter/fetchIncrement', 
  async(value) => {
    const response = await axios.put('/counter/increment', { value })
    return response.data;
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    }
  }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;