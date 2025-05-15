import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColorFormComponent } from './create-color-form.component';

describe('CreateColorFormComponent', () => {
  let component: CreateColorFormComponent;
  let fixture: ComponentFixture<CreateColorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateColorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
