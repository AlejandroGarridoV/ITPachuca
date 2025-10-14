import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculoLectura } from './circulo-lectura';

describe('CirculoLectura', () => {
  let component: CirculoLectura;
  let fixture: ComponentFixture<CirculoLectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculoLectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculoLectura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
