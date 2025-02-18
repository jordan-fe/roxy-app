import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilatorIconComponent } from './epilator-icon.component';

describe('EpilatorIconComponent', () => {
  let component: EpilatorIconComponent;
  let fixture: ComponentFixture<EpilatorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpilatorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpilatorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
