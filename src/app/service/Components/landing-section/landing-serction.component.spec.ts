import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSerctionComponent } from './landing-serction.component';

describe('LandingSerctionComponent', () => {
  let component: LandingSerctionComponent;
  let fixture: ComponentFixture<LandingSerctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSerctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSerctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
