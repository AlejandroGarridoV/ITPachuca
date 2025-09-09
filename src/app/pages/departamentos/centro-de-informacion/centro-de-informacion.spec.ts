import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeInformacion } from './centro-de-informacion';

describe('CentroDeInformacion', () => {
  let component: CentroDeInformacion;
  let fixture: ComponentFixture<CentroDeInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroDeInformacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeInformacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
