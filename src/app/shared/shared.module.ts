import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCardComponent } from './components/shop-card/shop-card.component';

@NgModule({
  declarations: [ShopCardComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ShopCardComponent,
  ],
})
export class SharedModule {}
