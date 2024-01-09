import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailPageComponent } from './planet-detail-page/planet-detail-page.component';
import { PlanetListPageComponent } from './planet-list-page/planet-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetListPageComponent,
  },
  {
    path: ':id',
    component: PlanetDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
