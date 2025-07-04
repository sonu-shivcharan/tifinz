import { IUser } from "@/models/user.model";
import { createSlice } from "@reduxjs/toolkit";

interface IIntialState{
  user:IUser |  null,
  isLoggedIn : boolean,
}
const initialState : IIntialState = {
  user: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
