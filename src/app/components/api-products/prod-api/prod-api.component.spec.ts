import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdApiComponent } from './prod-api.component';

describe('ProdApiComponent', () => {
  let component: ProdApiComponent;
  let fixture: ComponentFixture<ProdApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
