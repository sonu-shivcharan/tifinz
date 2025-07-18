import { configureStore } from '@reduxjs/toolkit'
import auth from './authSlice'
import users from "./usersSlice"
export const makeStore = () => {
  return configureStore({
    reducer: {auth, users}
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']