import { configureStore } from '@reduxjs/toolkit';


import newsReducer from "../redux/slices/newsSlice";

import commentsReducer from "../redux/slices/commentsSlice";


export const store = configureStore({
  reducer: {

    news : newsReducer,


    comment : commentsReducer,




  },
});
