import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinacionTutorias } from './coordinacion-tutorias';

describe('CoordinacionTutorias', () => {
  let component: CoordinacionTutorias;
  let fixture: ComponentFixture<CoordinacionTutorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinacionTutorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinacionTutorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
