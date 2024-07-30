import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<number, any>();

  getCachedUser(id: number) {
    return this.cache.get(id);
  }

  setCachedUser(id: number, user: any) {
    this.cache.set(id, user);
  }
}
