import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesSectionComponent } from './cities-section.component';

describe('CitiesSectionComponent', () => {
  let component: CitiesSectionComponent;
  let fixture: ComponentFixture<CitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
