import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crr } from './crr';

describe('Crr', () => {
  let component: Crr;
  let fixture: ComponentFixture<Crr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
