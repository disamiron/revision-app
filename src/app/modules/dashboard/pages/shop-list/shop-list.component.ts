import { Component } from '@angular/core';
import { IShop } from 'src/app/shared/interfaces';
import { testShopList } from 'src/app/shared/testConstants';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss'],
})
export class ShopListComponent {
  public shopList: IShop[] = testShopList;
}
