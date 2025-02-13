import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairClipperIconComponent } from './hair-clipper-icon.component';

describe('HairClipperIconComponent', () => {
  let component: HairClipperIconComponent;
  let fixture: ComponentFixture<HairClipperIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairClipperIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairClipperIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
