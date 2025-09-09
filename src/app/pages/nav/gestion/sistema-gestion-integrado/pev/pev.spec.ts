import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pev } from './pev';

describe('Pev', () => {
  let component: Pev;
  let fixture: ComponentFixture<Pev>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pev]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pev);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
