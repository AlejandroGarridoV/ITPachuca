import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dseminarios } from './dseminarios';

describe('Dseminarios', () => {
  let component: Dseminarios;
  let fixture: ComponentFixture<Dseminarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dseminarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dseminarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
