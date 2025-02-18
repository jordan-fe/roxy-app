import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoodleIconComponent } from './poodle-icon.component';

describe('PoodleIconComponent', () => {
  let component: PoodleIconComponent;
  let fixture: ComponentFixture<PoodleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoodleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoodleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
