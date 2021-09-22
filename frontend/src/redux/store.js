import { configureStore } from '@reduxjs/toolkit';
import questionsSlice from './slices/questionSlice'

export default configureStore({
  reducer: {
    questions: questionsSlice
  },
});
