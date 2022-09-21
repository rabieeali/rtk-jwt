import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: { user: null, token: null },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
