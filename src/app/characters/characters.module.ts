import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListPageComponent } from './character-list-page/character-list-page.component';
import { CharacterDetailPageComponent } from './character-detail-page/character-detail-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharacterListPageComponent, CharacterDetailPageComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class CharactersModule {}
