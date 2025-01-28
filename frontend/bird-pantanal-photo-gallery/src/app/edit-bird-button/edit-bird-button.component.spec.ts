import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBirdButtonComponent } from './edit-bird-button.component';

describe('EditBirdButtonComponent', () => {
  let component: EditBirdButtonComponent;
  let fixture: ComponentFixture<EditBirdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBirdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBirdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
