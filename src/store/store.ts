// store.ts
import { configureStore } from '@reduxjs/toolkit';
import PresentweatherReportSlice from './PresentweatherReportSlice';

const store = configureStore({
  reducer: {
    // all reducers here
    currentWather: PresentweatherReportSlice,
  },
});

export default store;
