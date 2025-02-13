import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorsIconComponent } from './scissors-icon.component';

describe('ScissorsIconComponent', () => {
  let component: ScissorsIconComponent;
  let fixture: ComponentFixture<ScissorsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScissorsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScissorsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
