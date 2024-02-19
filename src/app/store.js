import {configureStore} from '@reduxjs/toolkit'
import {TokenReducer} from "../feature/user/tokenSlice";
import {UserDataReducer} from "../feature/user/userDataSlice";


export default configureStore({
    reducer: {
        token: TokenReducer,
        userData: UserDataReducer
    }
})
