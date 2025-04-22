import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name : 'auth',
    initialState :{ isLoggedin :false , author: "Mohamed"},
    reducers: {
        logInOut :(state)=>{
            state.isLoggedin = !state.isLoggedin
        }
    }
})

export const { logInOut } = authSlice.actions


export default authSlice.reducer