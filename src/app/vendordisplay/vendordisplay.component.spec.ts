import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendordisplayComponent } from './vendordisplay.component';

describe('VendordisplayComponent', () => {
  let component: VendordisplayComponent;
  let fixture: ComponentFixture<VendordisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendordisplayComponent]
    });
    fixture = TestBed.createComponent(VendordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
