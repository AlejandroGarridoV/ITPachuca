import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDoctorado } from './menu-doctorado';

describe('MenuDoctorado', () => {
  let component: MenuDoctorado;
  let fixture: ComponentFixture<MenuDoctorado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDoctorado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDoctorado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
