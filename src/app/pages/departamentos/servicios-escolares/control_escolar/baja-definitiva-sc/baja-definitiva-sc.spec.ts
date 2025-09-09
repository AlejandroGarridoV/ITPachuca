import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaDefinitivaSC } from './baja-definitiva-sc';

describe('BajaDefinitivaSC', () => {
  let component: BajaDefinitivaSC;
  let fixture: ComponentFixture<BajaDefinitivaSC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaDefinitivaSC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaDefinitivaSC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
