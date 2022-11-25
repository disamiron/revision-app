import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { urlValues } from 'src/app/shared/constants';

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

  public isLoading: boolean = true;

  public manuallForm: FormGroup = this._fb.group({
    barcode: [null, Validators.required],
  });

  public revisionId: string | null =
    this._activatedRoute.snapshot.paramMap.get('revisionId');

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  public ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  public onValueChanges(result: QuaggaJSResultObject) {
    this.manuallForm.patchValue({
      barcode: result.codeResult.code,
    });
    this.submit();
  }

  public submit() {
    if (this.manuallForm.invalid) {
      return;
    }
    this._router.navigateByUrl(
      urlValues.dashboard +
        '/' +
        urlValues.revision +
        '/' +
        this.revisionId +
        '/' +
        urlValues.product +
        '/' +
        this.manuallForm.value.barcode
    );
  }

  public changeEnterOption() {
    if (this.isLoading) {
      return;
    }
    this.isManuallLogic = !this.isManuallLogic;
    if (!this.isManuallLogic) {
      this.isLoading = true;
      this.barcodeScanner.start();
    } else {
      this.barcodeScanner.stop();
      this.started = false;
    }
  }

  public barcodeScanStarted() {
    this.started = true;
    this.isLoading = false;
  }
}
