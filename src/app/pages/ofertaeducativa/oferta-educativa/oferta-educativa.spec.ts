import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaEducativa } from './oferta-educativa';

describe('OfertaEducativa', () => {
  let component: OfertaEducativa;
  let fixture: ComponentFixture<OfertaEducativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertaEducativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertaEducativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
