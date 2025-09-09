import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaGestionIntegrado } from './sistema-gestion-integrado';

describe('SistemaGestionIntegrado', () => {
  let component: SistemaGestionIntegrado;
  let fixture: ComponentFixture<SistemaGestionIntegrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaGestionIntegrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaGestionIntegrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
