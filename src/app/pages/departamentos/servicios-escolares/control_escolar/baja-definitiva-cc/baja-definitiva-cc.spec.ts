import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaDefinitivaCC } from './baja-definitiva-cc';

describe('BajaDefinitivaCC', () => {
  let component: BajaDefinitivaCC;
  let fixture: ComponentFixture<BajaDefinitivaCC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaDefinitivaCC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaDefinitivaCC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
