import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { QuaggaJSConfigObject, QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { urlValues } from 'src/app/shared/constants';
import { BarcodeOptionComponent } from 'src/app/shared/modals/barcode-option/barcode-option.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StorageType } from 'src/app/shared/services/storage.type';
import { QuaggaLocalConfig } from 'src/app/shared/interfaces';

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
    frequency: 10,
    locate: false,
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
      halfSample: false,
      patchSize: 'medium',
    },
  };

  public checkFormat: 'ean_13' | 'ean_8' = 'ean_13';

  public manuallForm: FormGroup = this._fb.group({
    barcode: [null, Validators.required],
  });

  public revisionId: string | null =
    this._activatedRoute.snapshot.paramMap.get('revisionId');

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _storageService: StorageService
  ) {}

  public ngAfterViewInit() {
    let scanOption = this._storageService.getItem<QuaggaLocalConfig>(
      StorageType.ScanOptions
    );

    if (scanOption) {
      this.updateConfig(scanOption);
    }

    this.barcodeScanner.start();
  }

  public onValueChanges(result: QuaggaJSResultObject) {
    if (
      result.codeResult.format === this.checkFormat &&
      result?.codeResult?.code
    ) {
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
    if (this.isLoading) {
      return;
    }

    this.barcodeScanner.stop();
    this._dialog
      .open(BarcodeOptionComponent, {
        data: {
          ...this.config,
        },
      })
      .afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe((v: QuaggaLocalConfig) => {
        if (v) {
          this._storageService.setItem(StorageType.ScanOptions, v);
          this.updateConfig(v);
        }
        this.barcodeScanner.start();
      });
  }

  public updateConfig(config: QuaggaLocalConfig) {
    this.config.locator!.patchSize = config.patchSize!;
    this.config.frequency = config.frequency;
    this.config.numOfWorkers = config.numOfWorkers;
    this.config.locate = config.locate;
    this.config.locator!.halfSample = config.halfSample;
    this.config.decoder!.readers = [config.readers];
    this.checkFormat =
      this.config!.decoder?.readers![0] === 'ean_8_reader' ? 'ean_8' : 'ean_13';
  }

  public barcodeScanStarted(started: boolean) {
    this.isLoading = !started;

    return;
  }
}
