import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ferroviaria } from './ferroviaria';

describe('Ferroviaria', () => {
  let component: Ferroviaria;
  let fixture: ComponentFixture<Ferroviaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ferroviaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ferroviaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
