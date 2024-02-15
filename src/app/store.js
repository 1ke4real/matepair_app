import {configureStore} from '@reduxjs/toolkit'
import {TokenReducer} from "../feature/user/tokenSlice";


export default configureStore({
    reducer: {
        token: TokenReducer
    }
})
