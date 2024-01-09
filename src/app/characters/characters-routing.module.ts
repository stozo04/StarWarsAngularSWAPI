import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { CharacterListPageComponent } from './character-list-page/character-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListPageComponent,
  },
  {
    path: ':id',
    component: CharacterDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
