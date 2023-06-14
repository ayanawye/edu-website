import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getArticles = createAsyncThunk(
  'articles/getArticles',
  async (_, {rejectedWithValue}) => {
      try {
          const res = await axios("http://localhost:3001/articles")
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
  articles: [],
  error: false,
  loading: false
}
const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: {
      [getArticles.pending]: (state) => {
          state.loading = true
          state.error = false
      },
      [getArticles.rejected]: (state) => {
          state.error = true
          state.loading = false
      },
      [getArticles.fulfilled]: (state, action) => {
          state.articles = action.payload
          state.loading = false
          state.error= false
      }
  }
})
export default articlesSlice.reducer