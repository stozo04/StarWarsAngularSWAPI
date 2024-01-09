import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListPageComponent } from './character-list-page.component';

describe('CharacterListPageComponent', () => {
  let component: CharacterListPageComponent;
  let fixture: ComponentFixture<CharacterListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
