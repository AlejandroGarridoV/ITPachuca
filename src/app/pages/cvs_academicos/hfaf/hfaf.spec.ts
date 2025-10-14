import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hfaf } from './hfaf';

describe('Hfaf', () => {
  let component: Hfaf;
  let fixture: ComponentFixture<Hfaf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hfaf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hfaf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
