import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mecanica } from './mecanica';

describe('Mecanica', () => {
  let component: Mecanica;
  let fixture: ComponentFixture<Mecanica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mecanica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mecanica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
