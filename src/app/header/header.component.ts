import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const userId = inputElement.value.trim();
    if (userId) {
      this.router.navigate(['/user', userId]);
    }
  }
}
