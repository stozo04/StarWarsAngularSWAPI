import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailPageComponent } from './vehicle-detail-page/vehicle-detail-page.component';
import { VehicleListPageComponent } from './vehicle-list-page/vehicle-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleListPageComponent,
  },
  {
    path: ':id',
    component: VehicleDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesRoutingModule {}
