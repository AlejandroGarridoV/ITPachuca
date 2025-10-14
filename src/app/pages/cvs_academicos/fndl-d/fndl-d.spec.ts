import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FndlD } from './fndl-d';

describe('FndlD', () => {
  let component: FndlD;
  let fixture: ComponentFixture<FndlD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FndlD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FndlD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
