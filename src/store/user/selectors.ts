import { RootState } from '@store';
import { UserType } from '@store/user/slice';

export const selectUser = (state: RootState): UserType => state.user;

export const selectIsLoggedIn = (state: RootState): boolean => Boolean(state.user?.id);
