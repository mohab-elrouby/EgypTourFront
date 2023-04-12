import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicereviewformComponent } from './servicereviewform.component';

describe('ServicereviewformComponent', () => {
  let component: ServicereviewformComponent;
  let fixture: ComponentFixture<ServicereviewformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicereviewformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicereviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
