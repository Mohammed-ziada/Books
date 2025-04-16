import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
// get books thunk
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// Insert Books Thunk
export const insertBooks = createAsyncThunk('book/insertBooks' ,async(datas, thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/books" , {
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
        const data = await res.json();

      return data;
        
    }catch(error){
        return rejectWithValue(error.message);
    }
})
const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: null,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
