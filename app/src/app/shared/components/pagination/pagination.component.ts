import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
    // here are goes all services
  }

  onPushData(): void {
    console.log('retreiving data from the dbddda');
  }
}
