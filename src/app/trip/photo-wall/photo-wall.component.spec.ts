import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWallComponent } from './photo-wall.component';

describe('PhotoWallComponent', () => {
  let component: PhotoWallComponent;
  let fixture: ComponentFixture<PhotoWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoWallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
