import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ofertaeducativa } from './ofertaeducativa';

describe('Ofertaeducativa', () => {
  let component: Ofertaeducativa;
  let fixture: ComponentFixture<Ofertaeducativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ofertaeducativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ofertaeducativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
