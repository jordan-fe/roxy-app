import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorsSimpleIconComponent } from './scissors-simple-icon.component';

describe('ScissorsSimpleIconComponent', () => {
  let component: ScissorsSimpleIconComponent;
  let fixture: ComponentFixture<ScissorsSimpleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScissorsSimpleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScissorsSimpleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
