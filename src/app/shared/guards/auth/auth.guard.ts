import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { urlValues } from '../../constants';
import { Token } from '../../interfaces';
import { StorageService } from '../../services/storage.service';
import { StorageType } from '../../services/storage.type';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _auth: UrlTree;

  private _dashboard: UrlTree;

  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {
    this._auth = this._router.parseUrl(urlValues.auth);
    this._dashboard = this._router.parseUrl(urlValues.dashboard);
  }

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token: Token = this._storageService.getItem<Token>(StorageType.Token);
    if (!token) {
      if (route.routeConfig?.path === urlValues.auth) {
        return true;
      }
      return this._auth;
    } else {
      if (route.routeConfig?.path === urlValues.auth) {
        return this._dashboard;
      }
      return true;
    }
  }
}
