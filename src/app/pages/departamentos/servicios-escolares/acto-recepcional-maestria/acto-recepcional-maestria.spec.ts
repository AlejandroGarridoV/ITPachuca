import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoRecepcionalMaestria } from './acto-recepcional-maestria';

describe('ActoRecepcionalMaestria', () => {
  let component: ActoRecepcionalMaestria;
  let fixture: ComponentFixture<ActoRecepcionalMaestria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActoRecepcionalMaestria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActoRecepcionalMaestria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
