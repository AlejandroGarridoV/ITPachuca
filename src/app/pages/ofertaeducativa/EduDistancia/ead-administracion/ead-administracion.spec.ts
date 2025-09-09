import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EadAdministracion } from './ead-administracion';

describe('EadAdministracion', () => {
  let component: EadAdministracion;
  let fixture: ComponentFixture<EadAdministracion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EadAdministracion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EadAdministracion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
