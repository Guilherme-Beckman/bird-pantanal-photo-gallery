import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBirdFormComponent } from './update-bird-form.component';

describe('UpdateBirdFormComponent', () => {
  let component: UpdateBirdFormComponent;
  let fixture: ComponentFixture<UpdateBirdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBirdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
