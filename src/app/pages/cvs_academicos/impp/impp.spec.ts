import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impp } from './impp';

describe('Impp', () => {
  let component: Impp;
  let fixture: ComponentFixture<Impp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
