import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { updateState } from './actions';

const initialState = {
  rockets: [],
  isLoading: true,
  isError: undefined,
};

const rocketUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('fetchrockets', async (rejectedWithValue) => {
  try {
    const response = await axios.get(rocketUrl);
    return response.data;
  } catch (error) {
    console.log(error);
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
      console.log('newState');
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
      console.log('newState');
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
