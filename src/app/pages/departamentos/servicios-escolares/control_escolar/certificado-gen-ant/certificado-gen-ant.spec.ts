import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoGenAnt } from './certificado-gen-ant';

describe('CertificadoGenAnt', () => {
  let component: CertificadoGenAnt;
  let fixture: ComponentFixture<CertificadoGenAnt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadoGenAnt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoGenAnt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
