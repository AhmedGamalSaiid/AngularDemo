import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCartComponent } from './child-cart.component';

describe('ChildCartComponent', () => {
  let component: ChildCartComponent;
  let fixture: ComponentFixture<ChildCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
