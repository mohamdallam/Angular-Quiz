import { createAction, props } from '@ngrx/store';
import { User } from '../../user.model';

// Define actions for loading users and user details
export const loadUsers = createAction(
  '[User List] Load Users',
  props<{ page: number }>()
);
export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[] }>()
);
export const loadUsersFailure = createAction(
  '[User List] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[User Details] Load User',
  props<{ id: number }>()
);
export const loadUserSuccess = createAction(
  '[User Details] Load User Success',
  props<{ user: User }>()
);
export const loadUserFailure = createAction(
  '[User Details] Load User Failure',
  props<{ error: any }>()
);
