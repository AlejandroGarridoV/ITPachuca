import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEscolares } from './servicios-escolares';

describe('ServiciosEscolares', () => {
  let component: ServiciosEscolares;
  let fixture: ComponentFixture<ServiciosEscolares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosEscolares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosEscolares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
