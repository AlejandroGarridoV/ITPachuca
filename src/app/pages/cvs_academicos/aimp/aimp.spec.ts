import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aimp } from './aimp';

describe('Aimp', () => {
  let component: Aimp;
  let fixture: ComponentFixture<Aimp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aimp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aimp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
