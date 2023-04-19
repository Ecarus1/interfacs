import {createSlice} from "@reduxjs/toolkit";
import { fetchUserData, fetchReposData, fetchCommitsData } from "./thunk";

const initialState = {
  userData: {},
  repItems: [],
  commits: [],
  waiting: false,
  errorMsg: ''
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.waiting = true;
        state.errorMsg = "";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.waiting = false;
        state.userData = {...action.payload.user};
        state.repItems = [...action.payload.repos];
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.waiting = false;
        state.errorMsg = action.payload.errorMsg;
      })

      .addCase(fetchReposData.pending, (state) => {
        state.waiting = true;
        state.errorMsg = "";
      })
      .addCase(fetchReposData.fulfilled, (state, action) => {
        state.waiting = false;
        state.repItems = [...action.payload];
      })
      .addCase(fetchReposData.rejected, (state, action) => {
        state.waiting = false;
        state.errorMsg = action.payload.errorMsg;
      })

      .addCase(fetchCommitsData.pending, (state) => {
        state.waiting = true;
        state.errorMsg = "";
      })
      .addCase(fetchCommitsData.fulfilled, (state, action) => {
        state.waiting = false;
        state.commits = [...action.payload];
      })
      .addCase(fetchCommitsData.rejected, (state, action) => {
        state.waiting = false;
        state.errorMsg = action.payload.errorMsg;
      })
  }
});

export default userSlice.reducer;