import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Murales } from './murales';

describe('Murales', () => {
  let component: Murales;
  let fixture: ComponentFixture<Murales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Murales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Murales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
