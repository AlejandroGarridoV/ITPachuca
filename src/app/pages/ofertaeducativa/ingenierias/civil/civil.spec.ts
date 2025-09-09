import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civil } from './civil';

describe('Civil', () => {
  let component: Civil;
  let fixture: ComponentFixture<Civil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Civil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
