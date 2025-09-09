import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Himno } from './himno';

describe('Himno', () => {
  let component: Himno;
  let fixture: ComponentFixture<Himno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Himno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Himno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
