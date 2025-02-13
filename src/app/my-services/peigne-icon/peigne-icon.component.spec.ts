import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeigneIconComponent } from './peigne-icon.component';

describe('PeigneIconComponent', () => {
  let component: PeigneIconComponent;
  let fixture: ComponentFixture<PeigneIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeigneIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeigneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
