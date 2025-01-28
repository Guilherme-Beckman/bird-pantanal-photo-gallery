import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBirdFormComponent } from './create-bird-form.component';

describe('CreateBirdFormComponent', () => {
  let component: CreateBirdFormComponent;
  let fixture: ComponentFixture<CreateBirdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBirdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
