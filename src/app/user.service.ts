import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse, UserListResponse } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(`${this.apiUrl}/users?page=${page}`);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}/users/${id}`);
  }
}
