import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//store is a global state that stores the entire information of our information
export const store = configureStore({
  //the reducer allow us to get the specific slice of the cake
  reducer: { [articleApi.reducerPath]: articleApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

//We are configuring a store, a store is a global state that saves the entire information of our application, but in most cases we don't need the entire state we only need to reduce it to a specific slice of the pie. This case it's the article API. Meaning we want to get something from the API
