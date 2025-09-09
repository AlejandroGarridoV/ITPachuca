import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itics } from './itics';

describe('Itics', () => {
  let component: Itics;
  let fixture: ComponentFixture<Itics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Itics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
