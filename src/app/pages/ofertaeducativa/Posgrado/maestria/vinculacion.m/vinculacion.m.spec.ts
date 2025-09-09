import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionM } from './vinculacion.m';

describe('VinculacionM', () => {
  let component: VinculacionM;
  let fixture: ComponentFixture<VinculacionM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinculacionM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinculacionM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
