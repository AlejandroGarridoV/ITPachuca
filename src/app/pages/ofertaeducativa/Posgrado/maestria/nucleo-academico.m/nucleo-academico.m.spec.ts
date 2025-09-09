import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoAcademicoM } from './nucleo-academico.m';

describe('NucleoAcademicoM', () => {
  let component: NucleoAcademicoM;
  let fixture: ComponentFixture<NucleoAcademicoM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NucleoAcademicoM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoAcademicoM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
