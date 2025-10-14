import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvcD } from './evc-d';

describe('EvcD', () => {
  let component: EvcD;
  let fixture: ComponentFixture<EvcD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvcD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvcD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
