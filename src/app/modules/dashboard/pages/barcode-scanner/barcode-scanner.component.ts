import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  public barcodeScanner!: BarcodeScannerLivestreamComponent;

  public barcodeValue: string | null = null;

  public started = false;

  public isManuallLogic: boolean = false;

  public manuallForm: FormGroup = this._fb.group({
    barcode: [null, Validators.required],
  });

  constructor(private _fb: FormBuilder) {}

  public ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  public onValueChanges(result: QuaggaJSResultObject) {
    this.barcodeValue = result.codeResult.code;
    this.barcodeScanner.stop();
    this.started = false;
  }
  public barcodeScanStarted() {
    this.started = true;
  }
}
