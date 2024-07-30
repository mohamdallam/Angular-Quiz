import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
