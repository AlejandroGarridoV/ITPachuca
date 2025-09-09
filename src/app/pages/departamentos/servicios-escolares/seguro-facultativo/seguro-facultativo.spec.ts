import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroFacultativo } from './seguro-facultativo';

describe('SeguroFacultativo', () => {
  let component: SeguroFacultativo;
  let fixture: ComponentFixture<SeguroFacultativo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguroFacultativo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroFacultativo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
