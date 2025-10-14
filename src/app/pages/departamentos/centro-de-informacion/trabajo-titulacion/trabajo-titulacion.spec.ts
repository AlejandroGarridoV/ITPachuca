import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoTitulacion } from './trabajo-titulacion';

describe('TrabajoTitulacion', () => {
  let component: TrabajoTitulacion;
  let fixture: ComponentFixture<TrabajoTitulacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajoTitulacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoTitulacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
