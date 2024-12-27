import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBirdComponent } from './create-bird.component';

describe('CreateBirdComponent', () => {
  let component: CreateBirdComponent;
  let fixture: ComponentFixture<CreateBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
