import {createSlice} from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        value: null,
    }
    ,
    reducers: {
        setUserData: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setUserData} = userDataSlice.actions;
export const UserDataReducer = userDataSlice.reducer;