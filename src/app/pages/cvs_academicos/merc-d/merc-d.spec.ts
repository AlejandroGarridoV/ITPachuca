import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercD } from './merc-d';

describe('MercD', () => {
  let component: MercD;
  let fixture: ComponentFixture<MercD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
