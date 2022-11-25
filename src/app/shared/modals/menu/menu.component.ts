import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { urlValues } from '../../constants';
import { IShop } from '../../interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  readonly urlValues = urlValues;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IShop) {}
}
