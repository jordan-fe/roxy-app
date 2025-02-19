import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweezersIconComponent } from './tweezers-icon.component';

describe('TweezersIconComponent', () => {
  let component: TweezersIconComponent;
  let fixture: ComponentFixture<TweezersIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweezersIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweezersIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
