import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlipCounterComponent } from './ngx-flip-counter.component';

describe('NgxFlipCounterComponent', () => {
  let component: NgxFlipCounterComponent;
  let fixture: ComponentFixture<NgxFlipCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFlipCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFlipCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
