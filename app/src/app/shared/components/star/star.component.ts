import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent {
  handleClickRate() {
    console.log('clicked rate star');
  }
}
