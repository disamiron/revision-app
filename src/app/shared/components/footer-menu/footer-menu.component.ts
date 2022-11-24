import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { urlValues } from '../../constants';
import { MenuComponent } from '../../modals/menu/menu.component';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent {
  public readonly urlValues = urlValues;

  constructor(
    private _dialog: MatDialog,
    private readonly _activateRoute: ActivatedRoute
  ) {}

  public showMenu() {
    this._dialog.open(MenuComponent, {
      data: {
        isThereRevision: true,
      },
    });
  }
}
