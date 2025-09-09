import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeIdiomas } from './centro-de-idiomas';

describe('CentroDeIdiomas', () => {
  let component: CentroDeIdiomas;
  let fixture: ComponentFixture<CentroDeIdiomas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroDeIdiomas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeIdiomas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
