import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pear } from './pear';

describe('Pear', () => {
  let component: Pear;
  let fixture: ComponentFixture<Pear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
