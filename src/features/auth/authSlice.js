import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
    token: null
  },

  reducers: {
    setCredential: (state, action) => {
      // const user = action.payload.user;
      // const accessToken = action.payload.accessToken;
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredential, logOut } = authSlice.actions;

export default authSlice.reducer;


// no need to do this but let's make selectors

export const selectCurrentUser = (state) => state.auth.user 
export const selectCurrentToken = (state) => state.auth.token 