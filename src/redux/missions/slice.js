import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMissions } from '../../api/missions';

const initialState = {
  missions: [],
  status: 'idle',
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await getMissions();
    return response;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'idle';
        state.missions = action.payload;
      });
  }
});

export default missionsSlice.reducer;
