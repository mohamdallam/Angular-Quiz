import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../user.service';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(({ page }) =>
        this.userService.getUsers(page).pipe(
          map((response) =>
            UserActions.loadUsersSuccess({ users: response.data })
          ),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(({ id }) =>
        this.userService.getUser(id).pipe(
          map((response) =>
            UserActions.loadUserSuccess({ user: response.data })
          ),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
