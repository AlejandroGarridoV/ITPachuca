import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duplicado } from './duplicado';

describe('Duplicado', () => {
  let component: Duplicado;
  let fixture: ComponentFixture<Duplicado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Duplicado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Duplicado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
