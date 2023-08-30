import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '@/features/layout/layout-slice';
import gameReducer from '@/features/game/game-slice';
import userReducer from '@/features/user-reducer';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    game: gameReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
