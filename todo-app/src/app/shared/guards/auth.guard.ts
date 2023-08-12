import { CanActivateFn, Router } from '@angular/router';
import { ɵɵinject } from '@angular/core';
import { AuthServiceService } from 'src/app/core/service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  let status: boolean = false;
  const authService = ɵɵinject(AuthServiceService);
  const router = ɵɵinject(Router);
  authService.userState.subscribe({
    next: (res) => {
      status = res;
    },
  });
  if (status) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
