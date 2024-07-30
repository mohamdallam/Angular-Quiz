import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User | null> = of(null);
  loading$: Observable<boolean> = of(true);

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = +params.get('id')!;
        return this.userService.getUser(id).pipe(
          map((response) => response.data), // Map UserResponse to User
          catchError(() => {
            // Handle the error and return a null user
            return of(null);
          })
        );
      })
    );

    this.loading$ = this.user$.pipe(map((user) => user === null));
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
