import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pep } from './pep';

describe('Pep', () => {
  let component: Pep;
  let fixture: ComponentFixture<Pep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
