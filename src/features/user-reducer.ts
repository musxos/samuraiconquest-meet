import { createSlice } from '@reduxjs/toolkit';

export type UserState = {
  nickName: string;
  address: string;
  refer: string;
  clan: number;
  point: number;

  isLogged: boolean;
};

export const initialState: UserState = {
  nickName: null,
  address: null,
  refer: null,
  clan: 0,
  point: 0,

  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLogged: (state, action) => {
      return { ...state, isLogged: action.payload };
    },
    reset: () => initialState,
  },
});

export const { update, reset, setLogged } = userSlice.actions;

export default userSlice.reducer;
