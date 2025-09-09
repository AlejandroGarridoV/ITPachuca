import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pec } from './pec';

describe('Pec', () => {
  let component: Pec;
  let fixture: ComponentFixture<Pec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
