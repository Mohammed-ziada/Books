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
export const insertBooks = createAsyncThunk('book/insertBooks' ,async(data, thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch("http://localhost:3005/books" , {
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
         data = await res.json();

      return data;
        
    }catch(error){
        return rejectWithValue(error.message);
    }
})

// Delete Books Thunk
export const deleteBooks = createAsyncThunk('book/deleteBooks' ,async(id, thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3005/books/${id}` , {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
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
    // Get Books
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

    // Insert Books
    [insertBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = [...state.books, action.payload];
    },
    [insertBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete Books
    [deleteBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
    [deleteBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
