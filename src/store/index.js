import { configureStore } from "@reduxjs/toolkit";
import Services from "../services";
import config from "../config";
import searchReducer from "./git-search"
import userReducer from "./git-user"

const services = new Services(config);

const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      thunk: {
        extraArgument: services 
      }
    }
  )
});

export default store;