import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@services/user/requests';

export type UserType = IUser | null;

const initialState: UserType = null as UserType;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(_, { payload }) {
            return { ...payload };
        },
        updateAvatar: (state, { payload }) => {
            if (state) {
                state.profile.avatar = payload;
            }
        },
        updateUserProfile: (state, { payload }) => {
            if (state) {
                state.profile = payload;
            }
        },

        updateUserLocations: (state, { payload }) => {
            if (state) {
                state.locations.push(payload);
            }
        },
        deleteLocation: (state, { payload }) => {
            if (state) {
                state.locations = state.locations.filter((location) => location.id !== payload.id);
            }
        },
        deleteAvatar: (state) => {
            if (state) {
                state.profile.avatar = undefined;
            }
        },
    },
});

export const {
    setUser,
    updateAvatar,
    updateUserProfile,
    deleteAvatar,
    updateUserLocations,
    deleteLocation,
} = userSlice.actions;

export default userSlice.reducer;

export type UserReducer = ReturnType<typeof userSlice.reducer>;
