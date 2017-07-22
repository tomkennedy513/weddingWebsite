import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsComponent } from './accommodations.component';

describe('AccomodationsComponent', () => {
  let component: AccommodationsComponent;
  let fixture: ComponentFixture<AccommodationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
