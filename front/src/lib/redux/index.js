import { configureStore } from "@reduxjs/toolkit";
import user from "./user/userReducer";

 
export const store = configureStore({
    reducer: {
        user
    }
})

