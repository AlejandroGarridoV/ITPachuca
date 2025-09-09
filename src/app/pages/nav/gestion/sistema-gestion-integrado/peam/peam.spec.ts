import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peam } from './peam';

describe('Peam', () => {
  let component: Peam;
  let fixture: ComponentFixture<Peam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
