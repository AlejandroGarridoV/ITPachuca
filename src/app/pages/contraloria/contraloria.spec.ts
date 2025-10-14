import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contraloria } from './contraloria';

describe('Contraloria', () => {
  let component: Contraloria;
  let fixture: ComponentFixture<Contraloria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contraloria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contraloria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
