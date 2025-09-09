import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoRecepcionalDoctorado } from './acto-recepcional-doctorado';

describe('ActoRecepcionalDoctorado', () => {
  let component: ActoRecepcionalDoctorado;
  let fixture: ComponentFixture<ActoRecepcionalDoctorado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActoRecepcionalDoctorado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActoRecepcionalDoctorado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
