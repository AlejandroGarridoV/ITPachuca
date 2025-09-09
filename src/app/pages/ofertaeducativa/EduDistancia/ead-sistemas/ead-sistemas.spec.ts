import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EadSistemas } from './ead-sistemas';

describe('EadSistemas', () => {
  let component: EadSistemas;
  let fixture: ComponentFixture<EadSistemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EadSistemas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EadSistemas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
