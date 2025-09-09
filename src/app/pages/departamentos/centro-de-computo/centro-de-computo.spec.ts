import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroDeComputo } from './centro-de-computo';

describe('CentroDeComputo', () => {
  let component: CentroDeComputo;
  let fixture: ComponentFixture<CentroDeComputo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentroDeComputo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroDeComputo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
