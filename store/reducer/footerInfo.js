import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getFooterInfo = createAsyncThunk(
  'footer/getFooterInfo',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("http://localhost:3002/footer")
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
  footer: [],
  error: false,
  loading: false
}
const footerSlice = createSlice({
  name: 'footer',
  initialState,
  extraReducers: {
      [getFooterInfo.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getFooterInfo.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getFooterInfo.fulfilled]: (state, action) => {
          state.footer = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default footerSlice.reducer