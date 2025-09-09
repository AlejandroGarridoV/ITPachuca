import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloAcademico } from './desarrollo-academico';

describe('DesarrolloAcademico', () => {
  let component: DesarrolloAcademico;
  let fixture: ComponentFixture<DesarrolloAcademico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolloAcademico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloAcademico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
