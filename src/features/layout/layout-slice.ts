import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LayoutState {
  wallet: boolean;
  search: boolean;
  notifications: boolean;
  messages: boolean;
  profile: boolean;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'indigo' | 'purple' | 'violet';
}

const initialState: LayoutState = {
  wallet: true,
  search: false,
  notifications: true,
  messages: true,
  profile: true,
  color: 'violet',
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Omit<LayoutState, 'color'>>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setColor(state, action: PayloadAction<LayoutState['color']>) {
      return {
        ...state,
        color: action.payload,
      };
    },
  },
});

export const { update, setColor } = layoutSlice.actions;
export default layoutSlice.reducer;
