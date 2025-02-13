import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotonSwabsIconComponent } from './coton-swabs-icon.component';

describe('CotonSwabsIconComponent', () => {
  let component: CotonSwabsIconComponent;
  let fixture: ComponentFixture<CotonSwabsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotonSwabsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotonSwabsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
