import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorIconComponent } from './razor-icon.component';

describe('RazorIconComponent', () => {
  let component: RazorIconComponent;
  let fixture: ComponentFixture<RazorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RazorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
