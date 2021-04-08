import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCartComponent } from './parent-cart.component';

describe('ParentCartComponent', () => {
  let component: ParentCartComponent;
  let fixture: ComponentFixture<ParentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
