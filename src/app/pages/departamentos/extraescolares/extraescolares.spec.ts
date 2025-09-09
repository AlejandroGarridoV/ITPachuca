import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extraescolares } from './extraescolares';

describe('Extraescolares', () => {
  let component: Extraescolares;
  let fixture: ComponentFixture<Extraescolares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Extraescolares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extraescolares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
