import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merc } from './merc';

describe('Merc', () => {
  let component: Merc;
  let fixture: ComponentFixture<Merc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
