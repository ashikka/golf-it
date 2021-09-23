import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "../../api"

export const getQuestionsThunk = createAsyncThunk(
  'questions/get',
  async () => {
    const response = api.getQuestions();
    return response;
  },
);

const questionsSlice = createSlice({
  name: 'questions',

  initialState: {
    data: null,
  },
  reducers: {
  },
  extraReducers: {
    [getQuestionsThunk.fulfilled]: (state, action) => {
      state.data = action.payload;
      return state;
    },
  },
});

export default questionsSlice.reducer;