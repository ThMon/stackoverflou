import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    infos: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUserReducer: (state, action)=>{
            state.isLogged = true;
            state.infos = action.payload
        },
        logoutUserReducer: (state, action)=>{
            state.isLogged = false;
            state.infos = null;
        }
    }
})

export const { loginUserReducer, logoutUserReducer } = userSlice.actions;
export default userSlice.reducer;