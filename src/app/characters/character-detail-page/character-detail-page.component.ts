import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, Planet, SwapiService } from 'src/app/swapi.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.css'],
})
export class CharacterDetailPageComponent implements OnInit {
  isLoadingResults = false;
  characterId: string;
  character: Character;
  planet: Planet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private swapi: SwapiService
  ) {}

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.characterId = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as string;

    this.swapi
      .getCharacter(this.characterId)
      .pipe(
        //Use switchMap to call another API(s)
        switchMap((character: Character) => {
          this.character = character;
          const splitted = character.homeworld.split('planets/', 2);
          const allObs$ = this.swapi.getCharacterHomePlanet(
            splitted[1].substring(0, splitted[1].length - 1)
          );

          return forkJoin(allObs$);
        })
      )
      .subscribe(
        (planet: [Planet]) => {
          this.planet = planet[0];
        },
        (err) => alert('Error loading data')
      )
      .add(() => (this.isLoadingResults = false));
  }
}
