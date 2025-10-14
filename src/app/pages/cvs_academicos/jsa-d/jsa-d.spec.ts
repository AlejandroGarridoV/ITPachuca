import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsaD } from './jsa-d';

describe('JsaD', () => {
  let component: JsaD;
  let fixture: ComponentFixture<JsaD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsaD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsaD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
