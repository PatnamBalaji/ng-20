import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // if (!this.auth.isLoggedIn()) {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;
  }
}
