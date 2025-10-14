import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mmr } from './mmr';

describe('Mmr', () => {
  let component: Mmr;
  let fixture: ComponentFixture<Mmr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mmr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mmr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
