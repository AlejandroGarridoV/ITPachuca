import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosSeminarioPosgrado } from './trabajos-seminario-posgrado';

describe('TrabajosSeminarioPosgrado', () => {
  let component: TrabajosSeminarioPosgrado;
  let fixture: ComponentFixture<TrabajosSeminarioPosgrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajosSeminarioPosgrado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosSeminarioPosgrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
