import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsSidebarComponent } from './trips-sidebar.component';

describe('TripsSidebarComponent', () => {
  let component: TripsSidebarComponent;
  let fixture: ComponentFixture<TripsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
