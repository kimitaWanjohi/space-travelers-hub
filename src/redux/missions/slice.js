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
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const mission = state.missions.find((mission) => mission.mission_id === action.payload);
      if (mission) {
        mission.reserved = false;
      }
    }
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
