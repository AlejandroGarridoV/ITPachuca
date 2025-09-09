import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GEmpresarial } from './g.empresarial';

describe('GEmpresarial', () => {
  let component: GEmpresarial;
  let fixture: ComponentFixture<GEmpresarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GEmpresarial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GEmpresarial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
