import { createReducer, on } from '@ngrx/store';
import { User } from '../../user.model';
import * as UserActions from './user.actions';

export interface State {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, UserActions.loadUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    selectedUser: user,
    loading: false,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
