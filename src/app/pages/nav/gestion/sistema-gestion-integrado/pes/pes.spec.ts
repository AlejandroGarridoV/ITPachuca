import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pes } from './pes';

describe('Pes', () => {
  let component: Pes;
  let fixture: ComponentFixture<Pes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
