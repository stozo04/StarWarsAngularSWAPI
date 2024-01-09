import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { merge } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {
  Starship,
  PaginatedResults,
  SwapiService,
} from 'src/app/swapi.service';

@Component({
  selector: 'app-vehicle-list-page',
  templateUrl: './vehicle-list-page.component.html',
  styleUrls: ['./vehicle-list-page.component.css'],
})
export class VehicleListPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'manufacturer', 'crew', 'model'];
  data: Starship[] = [];
  dataSource: any;
  resultsLength = 0;
  pageSize = 0;
  isLoadingResults = true;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private swapi: SwapiService, private router: Router) {}

  ngOnInit(): void {
    this.isLoadingResults = true;
    // TODO: Make Reusable
    this.swapi.getStarShips(1).subscribe(
      (data: PaginatedResults<Starship>) => {
        this.data = data.results;
        this.dataSource = new MatTableDataSource(data.results);
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
      this.swapi.getStarShips(event.pageIndex).subscribe(
        (data: PaginatedResults<Starship>) => {
          this.dataSource = new MatTableDataSource(data.results);
          this.isLoadingResults = false;
        },
        (err) => alert('Error loading data')
      );
    } else {
      this.swapi.getStarShips(event.pageIndex).subscribe(
        (data: PaginatedResults<Starship>) => {
          event.pageIndex--;
          this.dataSource = new MatTableDataSource(data.results);
          this.isLoadingResults = false;
        },
        (err) => alert('Error loading data')
      );
    }
  }

  public navigateToStarShip(url: string): void {
    const splitted = url.split('starships/', 2);
    this.router.navigate([
      '/vehicles/' + splitted[1].substring(0, splitted[1].length - 1),
    ]);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
