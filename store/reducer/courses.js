import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getCourses = createAsyncThunk(
  'courses/getCourses',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("http://localhost:3002/courses")
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
    courses: [],
    error: false,
    loading: false
}
const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: {
      [getCourses.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getCourses.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getCourses.fulfilled]: (state, action) => {
          state.courses = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default coursesSlice.reducer