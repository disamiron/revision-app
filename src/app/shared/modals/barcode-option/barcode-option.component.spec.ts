import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeOptionComponent } from './barcode-option.component';

describe('BarcodeOptionComponent', () => {
  let component: BarcodeOptionComponent;
  let fixture: ComponentFixture<BarcodeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
