import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBirdComponent } from './update-bird.component';

describe('UpdateBirdComponent', () => {
  let component: UpdateBirdComponent;
  let fixture: ComponentFixture<UpdateBirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
