import { Component, Input } from '@angular/core';
import { IShop } from '../../interfaces';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})
export class ShopCardComponent {
  @Input() public shop: IShop | null = null;

  public isAdmin: boolean = true;
}
