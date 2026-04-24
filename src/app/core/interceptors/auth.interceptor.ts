import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

const addToken = (req: HttpRequest<unknown>, token: string) =>
  req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  const authReq = token ? addToken(req, token) : req;

  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401 && authService.getRefreshToken()) {
        return authService.refresh().pipe(
          catchError(() => {
            authService.logout();
            return throwError(() => err);
          }),
          switchMap((res) => next(addToken(req, res.accessToken))),
        );
      }
      return throwError(() => err);
    }),
  );
};
