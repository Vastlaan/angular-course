import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquasionComponent } from './equasion.component';

describe('EquasionComponent', () => {
  let component: EquasionComponent;
  let fixture: ComponentFixture<EquasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
