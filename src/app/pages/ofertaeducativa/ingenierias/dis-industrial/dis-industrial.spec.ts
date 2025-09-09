import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisIndustrial } from './dis-industrial';

describe('DisIndustrial', () => {
  let component: DisIndustrial;
  let fixture: ComponentFixture<DisIndustrial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisIndustrial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisIndustrial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
