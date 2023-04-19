import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchSearch = createAsyncThunk(
  'search/fetch',
  async ({ value }, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: `/search/users?q=${value}`,
      method: "GET"
    });
    console.log(response)

    if(!response.message){
      return response;
    } else {
      return rejectWithValue({msg: response.message});
    }
  }
);