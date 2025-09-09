import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoRecepcionalLicenciatura } from './acto-recepcional-licenciatura';

describe('ActoRecepcionalLicenciatura', () => {
  let component: ActoRecepcionalLicenciatura;
  let fixture: ComponentFixture<ActoRecepcionalLicenciatura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActoRecepcionalLicenciatura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActoRecepcionalLicenciatura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
