import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailPageComponent } from './planet-detail-page.component';

describe('PlanetDetailPageComponent', () => {
  let component: PlanetDetailPageComponent;
  let fixture: ComponentFixture<PlanetDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
