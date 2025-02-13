import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailTrimmerIconComponent } from './nail-trimmer-icon.component';

describe('NailTrimmerIconComponent', () => {
  let component: NailTrimmerIconComponent;
  let fixture: ComponentFixture<NailTrimmerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailTrimmerIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NailTrimmerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
