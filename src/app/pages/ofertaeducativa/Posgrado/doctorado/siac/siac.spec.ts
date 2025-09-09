import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siac } from './siac';

describe('Siac', () => {
  let component: Siac;
  let fixture: ComponentFixture<Siac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siac]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
