import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    infos: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        loginUserReducer: (state, action)=>{
            state.isLogged = true;
            state.infos = action.payload
        }
    }
})

export const { loginUserReducer } = userSlice.actions;
export default userSlice.reducer;