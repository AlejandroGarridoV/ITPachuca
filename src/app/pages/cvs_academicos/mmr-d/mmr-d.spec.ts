import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmrD } from './mmr-d';

describe('MmrD', () => {
  let component: MmrD;
  let fixture: ComponentFixture<MmrD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmrD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmrD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
