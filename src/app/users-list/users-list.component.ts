import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';
import { LoadingService } from '../loading.service';
import { User, UserListResponse } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]> = of([]); // Initialize with an empty array
  loading$: Observable<boolean> = this.loadingService.loading$;
  page: number = 1;
  hasNextPage$: Observable<boolean> = of(false); // You may need to compute this based on the response

  constructor(
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loadingService.show();
    this.userService
      .getUsers(this.page)
      .subscribe((response: UserListResponse) => {
        this.users$ = of(response.data); // Update users$ with the user data
        this.hasNextPage$ = of(response.page < response.total_pages); // Compute hasNextPage
        this.loadingService.hide();
      });
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchUsers();
    }
  }

  nextPage() {
    this.page++;
    this.fetchUsers();
  }
}
