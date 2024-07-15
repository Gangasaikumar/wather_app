import { createSlice } from '@reduxjs/toolkit';
import { weatherState } from '../types/allTypes';

const initialState: weatherState ={
  watherReport:null,
  }

const PresentweatherReportSlice = createSlice({
  name: 'current_weatherReport',
  initialState,
  reducers: {
    setCurrentWatherReport: (state, actions) => {
      state.watherReport = actions.payload;
    },
  },
});

export const { setCurrentWatherReport } = PresentweatherReportSlice.actions;
export default PresentweatherReportSlice.reducer;