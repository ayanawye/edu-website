import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getTabs = createAsyncThunk(
  'tab/getTabs',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("http://localhost:3002/tabs")
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
  tab: [],
  error: false,
  loading: false
}
const tabSlice = createSlice({
  name: 'tab',
  initialState,
  extraReducers: {
      [getTabs.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getTabs.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getTabs.fulfilled]: (state, action) => {
          state.tab = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default tabSlice.reducer