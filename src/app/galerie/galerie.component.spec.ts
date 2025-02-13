import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieComponent } from './galerie.component';

describe('GalerieComponent', () => {
  let component: GalerieComponent;
  let fixture: ComponentFixture<GalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
