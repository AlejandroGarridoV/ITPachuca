import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eoad } from './eoad';

describe('Eoad', () => {
  let component: Eoad;
  let fixture: ComponentFixture<Eoad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eoad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eoad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
