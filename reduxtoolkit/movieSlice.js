import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        imdbID: action.payload.imdbID,
        movie: action.payload.movie,
      });
    },
    remove: (state, action) => {
      state = state.filter((removee) => removee.imdbID !== action.payload);
    },
  },
});

export const { add, remove } = movieSlice.actions;
export default movieSlice.reducer;
