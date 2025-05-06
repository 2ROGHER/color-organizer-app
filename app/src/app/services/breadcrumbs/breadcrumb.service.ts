import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
};

/**
 * In this service we use [BeahiorSubject] to
 */
@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private _router: Router) {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this._router.routerState.snapshot.root;
        const breadcrumbs = this.buildBreadcrumbs(root);
        this.breadcrumbs$.next(breadcrumbs);
      });
  }

  get breadcrumbs() {
    return this.breadcrumbs$.asObservable(); // parse to an Observable
  }

  private buildBreadcrumbs(route: ActivatedRouteSnapshot, url: string = "", breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const label = route.data['breadcrumb'];
    const path = route.routeConfig?.path ?? '';
    const nextUrl = path ? `${url}/${path}` : url;
    if (label) {
      breadcrumbs.push({ label, url: nextUrl });
    }
    if (route.firstChild){
      return this.buildBreadcrumbs(route.firstChild, nextUrl, breadcrumbs);
    }

    return breadcrumbs;

  }
}
