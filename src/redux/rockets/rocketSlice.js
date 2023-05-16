import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROCKETS_URL } from '../../consts';

const initialState = {
  rockets: [],
  isLoading: true,
  isError: undefined,
};

export const fetchRockets = createAsyncThunk('fetchrockets', async (rejectedWithValue) => {
  try {
    const response = await axios.get(ROCKETS_URL);
    return response.data;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
    unReserveRocket: (state, action) => {
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: updatedRockets,
      };
    },
    listReservedRockets: (state) => state.rockets.filter((rocket) => rocket.reserved === true),
  },
  extraReducers: (builders) => {
    builders.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builders.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    });
    builders.addCase(fetchRockets.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { reserveRocket, unReserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
