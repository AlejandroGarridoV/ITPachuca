import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioTesis } from './repositorio-tesis';

describe('RepositorioTesis', () => {
  let component: RepositorioTesis;
  let fixture: ComponentFixture<RepositorioTesis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioTesis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorioTesis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
