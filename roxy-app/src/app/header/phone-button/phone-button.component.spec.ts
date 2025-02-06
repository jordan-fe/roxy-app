import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneButtonComponent } from './phone-button.component';

describe('PhoneButtonComponent', () => {
  let component: PhoneButtonComponent;
  let fixture: ComponentFixture<PhoneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
