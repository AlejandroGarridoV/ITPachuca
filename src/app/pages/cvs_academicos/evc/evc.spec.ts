import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evc } from './evc';

describe('Evc', () => {
  let component: Evc;
  let fixture: ComponentFixture<Evc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
