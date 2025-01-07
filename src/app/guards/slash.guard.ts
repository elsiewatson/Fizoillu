import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SlashGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const url = route.url.map(segment => segment.path).join('/');
    const normalizedUrl = url.replace(/\/+/g, '');
    if (url !== normalizedUrl) {
      this.router.navigateByUrl(normalizedUrl);
      return false;
    }
    return true;
  }
}

