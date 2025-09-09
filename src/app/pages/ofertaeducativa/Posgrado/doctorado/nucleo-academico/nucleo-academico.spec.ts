import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoAcademico } from './nucleo-academico';

describe('NucleoAcademico', () => {
  let component: NucleoAcademico;
  let fixture: ComponentFixture<NucleoAcademico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NucleoAcademico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoAcademico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
