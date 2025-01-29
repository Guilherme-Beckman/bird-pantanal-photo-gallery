import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesForRequestComponent } from './messages-for-request.component';

describe('MessagesForRequestComponent', () => {
  let component: MessagesForRequestComponent;
  let fixture: ComponentFixture<MessagesForRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesForRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesForRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
