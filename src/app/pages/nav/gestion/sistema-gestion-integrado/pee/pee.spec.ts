import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pee } from './pee';

describe('Pee', () => {
  let component: Pee;
  let fixture: ComponentFixture<Pee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
