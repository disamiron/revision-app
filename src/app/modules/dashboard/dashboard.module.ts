import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShopListComponent } from './pages/shop-list/shop-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BarcodeScannerComponent } from './pages/barcode-scanner/barcode-scanner.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { RevisionSearchComponent } from './pages/revision-search/revision-search.component';

@NgModule({
  declarations: [ShopListComponent, BarcodeScannerComponent, ProductFormComponent, RevisionSearchComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
