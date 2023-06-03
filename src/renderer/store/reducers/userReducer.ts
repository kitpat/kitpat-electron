import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const defaultState: API.UserInfo = {
    username: '',
    avatar: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        saveUserInfo: (state, action: PayloadAction<API.UserInfo>) => {
            state.username = action.payload.username;
            state.avatar = action.payload.avatar;
        },
        removeUserInfo: (state) => {
            state.username = '';
            state.avatar = undefined;
        }
    }
})

export const { saveUserInfo, removeUserInfo } = userSlice.actions;

export default userSlice.reducer;