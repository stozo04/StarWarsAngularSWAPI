import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Starship, SwapiService } from 'src/app/swapi.service';

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.css'],
})
export class VehicleDetailPageComponent implements OnInit {
  isLoadingResults = false;
  starShipId: string;
  starShip: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private swapi: SwapiService
  ) {}

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.starShipId = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.swapi
      .getStarShip(this.starShipId)
      .subscribe(
        (data: Starship) => {
          this.starShip = data;
        },
        (err) => alert('Error loading data')
      )
      .add(() => (this.isLoadingResults = false));
  }
}
