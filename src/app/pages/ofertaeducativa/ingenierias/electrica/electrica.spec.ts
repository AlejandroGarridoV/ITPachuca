import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electrica } from './electrica';

describe('Electrica', () => {
  let component: Electrica;
  let fixture: ComponentFixture<Electrica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electrica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electrica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
