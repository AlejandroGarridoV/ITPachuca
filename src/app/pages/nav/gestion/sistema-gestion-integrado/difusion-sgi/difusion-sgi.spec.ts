import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifusionSgi } from './difusion-sgi';

describe('DifusionSgi', () => {
  let component: DifusionSgi;
  let fixture: ComponentFixture<DifusionSgi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifusionSgi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifusionSgi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
