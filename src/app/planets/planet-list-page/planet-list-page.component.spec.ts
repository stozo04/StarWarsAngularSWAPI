import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetListPageComponent } from './planet-list-page.component';

describe('PlanetListPageComponent', () => {
  let component: PlanetListPageComponent;
  let fixture: ComponentFixture<PlanetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
