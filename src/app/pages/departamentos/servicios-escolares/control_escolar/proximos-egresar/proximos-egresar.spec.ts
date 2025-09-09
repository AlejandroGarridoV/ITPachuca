import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosEgresar } from './proximos-egresar';

describe('ProximosEgresar', () => {
  let component: ProximosEgresar;
  let fixture: ComponentFixture<ProximosEgresar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximosEgresar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosEgresar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
