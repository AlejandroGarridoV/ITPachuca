import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Posgrado } from './posgrado';

describe('Posgrado', () => {
  let component: Posgrado;
  let fixture: ComponentFixture<Posgrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Posgrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Posgrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
