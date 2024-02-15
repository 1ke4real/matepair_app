import {createSlice} from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: null,
    }
    ,
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload
        },
        removeToken: (state) => {
            state.value = null
        }
    }

})
export const {setToken, removeToken} = tokenSlice.actions;
export const TokenReducer = tokenSlice.reducer;