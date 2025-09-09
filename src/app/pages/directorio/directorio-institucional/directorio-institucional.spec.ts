import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioInstitucional } from './directorio-institucional';

describe('DirectorioInstitucional', () => {
  let component: DirectorioInstitucional;
  let fixture: ComponentFixture<DirectorioInstitucional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioInstitucional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioInstitucional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
