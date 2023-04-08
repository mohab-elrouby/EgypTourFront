import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommentComponent } from './updatecomment.component';

describe('UpdatecommentComponent', () => {
  let component: UpdatecommentComponent;
  let fixture: ComponentFixture<UpdatecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
