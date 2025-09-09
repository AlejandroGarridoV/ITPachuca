import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dr } from './dr';

describe('Dr', () => {
  let component: Dr;
  let fixture: ComponentFixture<Dr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
