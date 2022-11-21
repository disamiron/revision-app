import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { urlValues } from './shared/constants';

const routes: Routes = [
  {
    path: urlValues.auth,
    component: AuthComponent,
  },
  {
    path: urlValues.dashboard,
    component: DashboardComponent,
  },
  { path: '**', redirectTo: urlValues.auth, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
