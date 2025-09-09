import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaTemporal } from './baja-temporal';

describe('BajaTemporal', () => {
  let component: BajaTemporal;
  let fixture: ComponentFixture<BajaTemporal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaTemporal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaTemporal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
