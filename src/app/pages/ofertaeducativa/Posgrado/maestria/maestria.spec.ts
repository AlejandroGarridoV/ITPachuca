import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maestria } from './maestria';

describe('Maestria', () => {
  let component: Maestria;
  let fixture: ComponentFixture<Maestria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maestria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maestria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
