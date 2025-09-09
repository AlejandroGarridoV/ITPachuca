import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaestria } from './menu-maestria';

describe('MenuMaestria', () => {
  let component: MenuMaestria;
  let fixture: ComponentFixture<MenuMaestria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMaestria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMaestria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
