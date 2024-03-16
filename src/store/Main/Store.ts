
import { configureStore } from "@reduxjs/toolkit";

export type RootStateType = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {}
})

export default store;
