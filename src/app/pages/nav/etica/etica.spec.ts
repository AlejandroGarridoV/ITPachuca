import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etica } from './etica';

describe('Etica', () => {
  let component: Etica;
  let fixture: ComponentFixture<Etica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
