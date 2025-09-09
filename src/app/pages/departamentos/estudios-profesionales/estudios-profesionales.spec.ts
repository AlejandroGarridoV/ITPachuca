import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosProfesionales } from './estudios-profesionales';

describe('EstudiosProfesionales', () => {
  let component: EstudiosProfesionales;
  let fixture: ComponentFixture<EstudiosProfesionales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosProfesionales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosProfesionales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
