import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { urlValues } from '../../constants';
import { MenuComponent } from '../../modals/menu/menu.component';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent {
  @Input() productPage: boolean = false;

  public readonly urlValues = urlValues;

  constructor(private _dialog: MatDialog, private _router: Router) {}

  public showMenu() {
    this._dialog.open(MenuComponent, {
      data: {
        isThereRevision: true,
      },
    });
  }

  public locationBack() {
    this._router.navigate(this._router.url.split('/', 4));
  }
}
