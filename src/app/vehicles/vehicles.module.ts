import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehicleDetailPageComponent } from './vehicle-detail-page/vehicle-detail-page.component';
import { VehicleListPageComponent } from './vehicle-list-page/vehicle-list-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [VehicleDetailPageComponent, VehicleListPageComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class VehiclesModule {}
