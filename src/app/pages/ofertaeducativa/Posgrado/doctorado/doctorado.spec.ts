import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctorado } from './doctorado';

describe('Doctorado', () => {
  let component: Doctorado;
  let fixture: ComponentFixture<Doctorado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctorado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctorado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
