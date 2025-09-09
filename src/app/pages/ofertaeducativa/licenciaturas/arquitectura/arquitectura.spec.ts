import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arquitectura } from './arquitectura';

describe('Arquitectura', () => {
  let component: Arquitectura;
  let fixture: ComponentFixture<Arquitectura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arquitectura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arquitectura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
