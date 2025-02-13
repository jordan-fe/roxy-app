import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathIconComponent } from './bath-icon.component';

describe('BathIconComponent', () => {
  let component: BathIconComponent;
  let fixture: ComponentFixture<BathIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
