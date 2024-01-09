import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {
  Character,
  PaginatedResults,
  SwapiService,
} from 'src/app/swapi.service';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.css'],
})
export class CharacterListPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'eye-color', 'height'];
  data: Character[] = [];
  resultsLength = 0;
  pageSize = 0;
  isLoadingResults = true;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private swapi: SwapiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoadingResults = true;
    // TODO: Make Reusable
    this.swapi.getCharacters(1).subscribe(
      (data: PaginatedResults<Character>) => {
        this.data = data.results;
        this.pageSize = data.results.length;
        this.resultsLength = data.count;
        this.isLoadingResults = false;
      },
      (err) => alert('Error loading data')
    );
  }

  public handlePage(event: PageEvent) {
    // BUG: Fix pagination bug when pageIndex is 0
    event.pageIndex++;

    this.isLoadingResults = true;
    if (event.pageIndex >= 1) {
      this.swapi.getCharacters(event.pageIndex).subscribe(
        (data: PaginatedResults<Character>) => {
          this.data = data.results;
          this.pageSize = data.results.length;
          this.resultsLength = data.count;
          this.isLoadingResults = false;
        },
        (err) => alert('Error loading data')
      );
    } else {
      this.swapi.getCharacters(event.pageIndex).subscribe(
        (data: PaginatedResults<Character>) => {
          event.pageIndex--;
          this.data = data.results;
          this.pageSize = data.results.length;
          this.resultsLength = data.count;
          this.isLoadingResults = false;
        },
        (err) => alert('Error loading data')
      );
    }
  }

  public navigateToCharacter(url: string): void {
    const splitted = url.split('people/', 2);
    this.router.navigate([
      '/characters/' + splitted[1].substring(0, splitted[1].length - 1),
    ]);
  }
}
