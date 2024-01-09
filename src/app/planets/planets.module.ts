import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetListPageComponent } from './planet-list-page/planet-list-page.component';
import { PlanetDetailPageComponent } from './planet-detail-page/planet-detail-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [PlanetListPageComponent, PlanetDetailPageComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class PlanetsModule {}
