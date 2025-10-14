import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EoadD } from './eoad-d';

describe('EoadD', () => {
  let component: EoadD;
  let fixture: ComponentFixture<EoadD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EoadD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EoadD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
