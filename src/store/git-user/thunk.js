import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk(
  'user/fetch',
  async ({ value }, { rejectWithValue, extra }) => {
    const response = await extra.api.getUserWithRepos(value);
    
    if(!response.user.message){
      return response;
    } else {
      return rejectWithValue(
        {
          errorMsg: response.user.message
        }
      );
    }
  }
);

export const fetchReposData = createAsyncThunk(
  'user/fetchRepos',
  async ({ value }, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: `/users/${value}/repos?type=all`,
      method: "GET"
    });

    if(!response.message){
      return response;
    } else {
      return rejectWithValue(
        {
          errorMsg: response.message
        }
      );
    }
  }
);

export const fetchCommitsData = createAsyncThunk(
  'user/fetchCommits',
  async ({ value }, { rejectWithValue, extra }) => {
    const response = await extra.api.request({
      url: `/repos/${value.login}/${value.name}/commits`,
      method: "GET"
    });

    if(!response.message){
      return response;
    } else {
      return rejectWithValue(
        {
          errorMsg: response.message
        }
      );
    }
  }
);