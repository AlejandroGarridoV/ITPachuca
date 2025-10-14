import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCentroInformacion } from './menu-centro-informacion';

describe('MenuCentroInformacion', () => {
  let component: MenuCentroInformacion;
  let fixture: ComponentFixture<MenuCentroInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCentroInformacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCentroInformacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
