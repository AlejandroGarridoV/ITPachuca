import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ripim } from './ripim';

describe('Ripim', () => {
  let component: Ripim;
  let fixture: ComponentFixture<Ripim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ripim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ripim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
