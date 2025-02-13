import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairSprayIconComponent } from './hair-spray-icon.component';

describe('HairSprayIconComponent', () => {
  let component: HairSprayIconComponent;
  let fixture: ComponentFixture<HairSprayIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairSprayIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairSprayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
