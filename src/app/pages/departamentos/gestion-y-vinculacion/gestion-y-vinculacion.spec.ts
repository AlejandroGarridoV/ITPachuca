import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionYVinculacion } from './gestion-y-vinculacion';

describe('GestionYVinculacion', () => {
  let component: GestionYVinculacion;
  let fixture: ComponentFixture<GestionYVinculacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionYVinculacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionYVinculacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
