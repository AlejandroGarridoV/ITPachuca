import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioMedico } from './servicio-medico';

describe('ServicioMedico', () => {
  let component: ServicioMedico;
  let fixture: ComponentFixture<ServicioMedico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioMedico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioMedico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
