import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getSwipers = createAsyncThunk(
  'swipers/getSwipers',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("http://localhost:3002/swiper")
          if(res.statusText !== 'OK'){
              throw new Error("Произошла ошибка")
          }
          return res.data
      }catch (err){
          console.log(rejectedWithValue(err.message))
      }
  }
)

const initialState = {
  swipers: [],
  error: false,
  loading: false
}
const swiperSlice = createSlice({
  name: 'swipers',
  initialState,
  extraReducers: {
      [getSwipers.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getSwipers.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getSwipers.fulfilled]: (state, action) => {
          state.swipers = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default swiperSlice.reducer