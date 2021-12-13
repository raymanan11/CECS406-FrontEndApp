import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePartComponent } from './airline-part.component';

describe('AirlinePartComponent', () => {
  let component: AirlinePartComponent;
  let fixture: ComponentFixture<AirlinePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
