import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrvD } from './irv-d';

describe('IrvD', () => {
  let component: IrvD;
  let fixture: ComponentFixture<IrvD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrvD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrvD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
