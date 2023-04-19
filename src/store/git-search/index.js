import {createSlice} from "@reduxjs/toolkit";
import { fetchSearch } from "./thunk";

const initialState = {
  items: [],
  totalCount: null,
  waiting: false,
  errorMsg: ''
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.waiting = true;
        state.errorMsg = "";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.waiting = false;
        state.items = [...action.payload.items];
        state.totalCount = action.payload.total_count;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.waiting = false;
        state.totalCount = 0;
        state.errorMsg = action.payload.msg;
      })
  }
});


export default searchSlice.reducer;