import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { urlValues } from '../../constants';
import { IShop } from '../../interfaces';
import { MenuComponent } from '../../modals/menu/menu.component';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent {
  @Input() public shop: IShop | null = null;

  public isModerator: boolean = true;

  constructor(private _dialog: MatDialog, private _router: Router) {}

  public navigateToRevision() {
    this._router.navigateByUrl(
      urlValues.dashboard +
        '/' +
        urlValues.revision +
        '/' +
        this.shop?.revisionId
    );
  }

  public showMenu() {
    this._dialog.open(MenuComponent, {
      data: {
        ...this.shop,
      },
    });
  }
}
