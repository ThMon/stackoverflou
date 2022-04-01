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
        },
        loadUserInfosReducer: (state, action)=>{
            state.infos = action.payload
        }
    }
})

export const { loginUserReducer, logoutUserReducer, loadUserInfosReducer } = userSlice.actions;
export default userSlice.reducer;