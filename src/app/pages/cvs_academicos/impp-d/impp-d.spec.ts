import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImppD } from './impp-d';

describe('ImppD', () => {
  let component: ImppD;
  let fixture: ComponentFixture<ImppD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImppD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImppD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
