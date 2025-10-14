import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Irv } from './irv';

describe('Irv', () => {
  let component: Irv;
  let fixture: ComponentFixture<Irv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Irv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Irv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
