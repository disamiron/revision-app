import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuaggaJSConfigObject, QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { urlValues } from 'src/app/shared/constants';
import { BarcodeOptionComponent } from 'src/app/shared/modals/barcode-option/barcode-option.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  public barcodeScanner!: BarcodeScannerLivestreamComponent;

  public isManuallLogic: boolean = false;

  public isLoading: boolean = true;

  public config: QuaggaJSConfigObject = {
    frequency: 5,
    locate: true,
    numOfWorkers: 2,
    inputStream: {
      constraints: {
        facingMode: 'environment',
      },
      area: {
        top: '20%',
        right: '0%',
        left: '0%',
        bottom: '20%',
      },
    },
    decoder: {
      readers: ['ean_reader'],
    },
    locator: {
      halfSample: true,
      patchSize: 'medium',
    },
  };

  public manuallForm: FormGroup = this._fb.group({
    barcode: [null, Validators.required],
  });

  public revisionId: string | null =
    this._activatedRoute.snapshot.paramMap.get('revisionId');

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  public ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  public onValueChanges(result: QuaggaJSResultObject) {
    if (result.codeResult.format === 'ean_13' && result?.codeResult?.code) {
      this.barcodeScanner.stop();
      this.isManuallLogic = true;
      this.manuallForm.patchValue({
        barcode: result.codeResult.code,
      });
    }
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
    if (this.isLoading && !this.isManuallLogic) {
      return;
    }

    this.isManuallLogic = !this.isManuallLogic;

    if (!this.isManuallLogic) {
      this.manuallForm.patchValue({
        barcode: null,
      });
      this.isLoading = true;
      this.barcodeScanner.start();
    } else {
      this.barcodeScanner.stop();
    }
  }

  public setting() {
    this.barcodeScanner.stop();
    this._dialog
      .open(BarcodeOptionComponent, {
        data: {
          ...this.config,
        },
      })
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe(
        (v: {
          patchSize: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
          frequency: number;
          numOfWorkers: number;
          locate: boolean;
          halfSample: boolean;
        }) => {
          if (v) {
            this.config.locator!.patchSize = v.patchSize!;
            this.config.frequency = v.frequency;
            this.config.numOfWorkers = v.numOfWorkers;
            this.config.locate = v.locate;
            this.config.locator!.halfSample = v.halfSample;
          }
          this.barcodeScanner.start();
        }
      );
  }

  public barcodeScanStarted(started: boolean) {
    this.isLoading = !started;

    return;
  }
}
