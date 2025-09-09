import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminariosM } from './seminarios.m';

describe('SeminariosM', () => {
  let component: SeminariosM;
  let fixture: ComponentFixture<SeminariosM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminariosM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminariosM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
