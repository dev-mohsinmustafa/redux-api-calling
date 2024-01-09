import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';





const initialState = {
    comments: [],
    isLoading: false,
    isError: false,
}

 
export const fetchComments = createAsyncThunk('fetchComments',
    async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments")
            console.log("data from json placeholder Api Response=>", data);
            return data;

        } catch (error) {
            console.log(error);
        }
    }
)



export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
 
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
            .addCase(fetchComments.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                console.log("Error ", action.payload);
                state.isError = true;
            });
    }



})



export default commentsSlice.reducer