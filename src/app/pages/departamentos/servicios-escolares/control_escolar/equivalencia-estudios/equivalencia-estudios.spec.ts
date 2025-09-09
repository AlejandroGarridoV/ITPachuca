import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalenciaEstudios } from './equivalencia-estudios';

describe('EquivalenciaEstudios', () => {
  let component: EquivalenciaEstudios;
  let fixture: ComponentFixture<EquivalenciaEstudios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquivalenciaEstudios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquivalenciaEstudios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
