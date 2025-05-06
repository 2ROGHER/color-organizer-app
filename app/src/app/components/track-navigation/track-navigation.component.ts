import { Component } from '@angular/core';
import {
  Breadcrumb,
  BreadcrumbService,
} from '../../services/breadcrumbs/breadcrumb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track-navigation',
  templateUrl: './track-navigation.component.html',
  styleUrl: './track-navigation.component.scss',
})
export class TrackNavigationComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private __breadcrumbs$Service: BreadcrumbService) {
    this.breadcrumbs$ = this.__breadcrumbs$Service.breadcrumbs;
  }
}
