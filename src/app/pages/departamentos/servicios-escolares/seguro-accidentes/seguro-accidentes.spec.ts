import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroAccidentes } from './seguro-accidentes';

describe('SeguroAccidentes', () => {
  let component: SeguroAccidentes;
  let fixture: ComponentFixture<SeguroAccidentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguroAccidentes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroAccidentes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
