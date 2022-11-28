import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuaggaJSConfigObject } from '@ericblade/quagga2';

@Component({
  selector: 'app-barcode-option',
  templateUrl: './barcode-option.component.html',
  styleUrls: ['./barcode-option.component.scss'],
})
export class BarcodeOptionComponent implements OnInit {
  public barcodeOptionForm: FormGroup = this._fb.group({
    patchSizes: [null],
    frequency: [
      null,
      [Validators.required, Validators.min(1), Validators.max(20)],
    ],
    numOfWorkers: [
      null,
      [Validators.required, Validators.min(1), Validators.max(4)],
    ],
    locate: [false],
    halfSample: [false],
  });

  public patchSizes = ['x-small', 'small', 'medium', 'large', 'x-large'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: QuaggaJSConfigObject,
    private _dialogRef: MatDialogRef<BarcodeOptionComponent>,
    private _fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.barcodeOptionForm.patchValue({
      patchSizes: this.data.locator?.patchSize,
      frequency: this.data.frequency,
      numOfWorkers: this.data.numOfWorkers,
      locate: this.data.locate,
      halfSample: this.data.locator?.halfSample,
    });
  }

  public sumbit() {
    this._dialogRef.close(this.barcodeOptionForm.value);
  }
}
