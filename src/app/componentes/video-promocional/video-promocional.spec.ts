import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPromocional } from './video-promocional';

describe('VideoPromocional', () => {
  let component: VideoPromocional;
  let fixture: ComponentFixture<VideoPromocional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPromocional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPromocional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
