import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters.module').then(
        (mod) => mod.CharactersModule
      ),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./planets/planets.module').then((mod) => mod.PlanetsModule),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./vehicles/vehicles.module').then((mod) => mod.VehiclesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
