import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgig } from './sgig';

describe('Sgig', () => {
  let component: Sgig;
  let fixture: ComponentFixture<Sgig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sgig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sgig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
