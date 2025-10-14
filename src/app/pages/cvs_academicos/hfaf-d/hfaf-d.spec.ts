import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfafD } from './hfaf-d';

describe('HfafD', () => {
  let component: HfafD;
  let fixture: ComponentFixture<HfafD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HfafD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfafD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
