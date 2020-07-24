import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

interface UserState {
  value: string;
  token?: string;
}

const initialState: UserState = {
  value: 'Usuario 1',
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<UserState>) => {
      console.log(action.payload)
      let {value, token} = action.payload;
      state.value = value
      state.token = token

    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;