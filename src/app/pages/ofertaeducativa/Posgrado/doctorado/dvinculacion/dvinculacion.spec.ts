import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dvinculacion } from './dvinculacion';

describe('Dvinculacion', () => {
  let component: Dvinculacion;
  let fixture: ComponentFixture<Dvinculacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dvinculacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dvinculacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
