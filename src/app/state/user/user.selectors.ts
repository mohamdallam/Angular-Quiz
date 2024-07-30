import { createSelector } from '@ngrx/store';
import { State } from './user.reducer';

export const selectUserState = (state: any) => state.users;

export const selectAllUsers = createSelector(
  selectUserState,
  (state: State) => state.users
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state: State) => state.selectedUser
);

export const selectLoading = createSelector(
  selectUserState,
  (state: State) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: State) => state.error
);
