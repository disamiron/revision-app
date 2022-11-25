import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCardComponent } from './components/shop-card/shop-card.component';

import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';

@NgModule({
  declarations: [ShopCardComponent, FooterMenuComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BarcodeScannerLivestreamModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ShopCardComponent,
    BarcodeScannerLivestreamModule,
    FooterMenuComponent,
  ],
})
export class SharedModule {}
