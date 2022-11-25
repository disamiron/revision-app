import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { urlValues } from 'src/app/shared/constants';
import { BarcodeScannerComponent } from './pages/barcode-scanner/barcode-scanner.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ShopListComponent } from './pages/shop-list/shop-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent,
  },
  {
    path: `${urlValues.revision}/:revisionId`,
    component: BarcodeScannerComponent,
  },
  {
    path: `${urlValues.revision}/:revisionId/${urlValues.product}/:productId`,
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
