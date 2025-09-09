import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pea } from './pea';

describe('Pea', () => {
  let component: Pea;
  let fixture: ComponentFixture<Pea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
