import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./user.service";
import {initialState} from './user.init'

const status ={
    pending: 'pending',
    fullfilled: 'fullfilled',
    rejected: 'rejected'
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const{pending, rejected} = status;

        builder
        .addCase(fetchAllUsers.fulfilled, handleFulfilled)
    }
})

const handleFulfilled = (state: any, {payload}: any) => 
 {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)

}
export const getAllUsers = (state: any) => {
    console.log('------------ Before useSelector ------------')
    console.log(JSON.stringify(state.user.array.result))
    return state.user.array.result;
}

export const {} = userSlice.actions

export default userSlice.reducer;