import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNavigationComponent } from './track-navigation.component';

describe('TrackNavigationComponent', () => {
  let component: TrackNavigationComponent;
  let fixture: ComponentFixture<TrackNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
