import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhpD } from './vhp-d';

describe('VhpD', () => {
  let component: VhpD;
  let fixture: ComponentFixture<VhpD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VhpD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VhpD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
