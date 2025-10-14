import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimpD } from './aimp-d';

describe('AimpD', () => {
  let component: AimpD;
  let fixture: ComponentFixture<AimpD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimpD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimpD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
