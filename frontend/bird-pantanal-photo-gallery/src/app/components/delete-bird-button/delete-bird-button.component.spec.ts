import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBirdButtonComponent } from './delete-bird-button.component';

describe('DeleteBirdButtonComponent', () => {
  let component: DeleteBirdButtonComponent;
  let fixture: ComponentFixture<DeleteBirdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBirdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBirdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
