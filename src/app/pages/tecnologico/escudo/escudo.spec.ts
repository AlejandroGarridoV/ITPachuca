import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escudo } from './escudo';

describe('Escudo', () => {
  let component: Escudo;
  let fixture: ComponentFixture<Escudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escudo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escudo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
