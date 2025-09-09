import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioTutores } from './directorio-tutores';

describe('DirectorioTutores', () => {
  let component: DirectorioTutores;
  let fixture: ComponentFixture<DirectorioTutores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorioTutores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorioTutores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
