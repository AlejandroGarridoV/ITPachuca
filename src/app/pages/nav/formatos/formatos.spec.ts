import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formatos } from './formatos';

describe('Formatos', () => {
  let component: Formatos;
  let fixture: ComponentFixture<Formatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
