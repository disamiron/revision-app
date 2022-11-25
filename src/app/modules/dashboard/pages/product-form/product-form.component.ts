import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { urlValues } from 'src/app/shared/constants';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  public productForm: FormGroup = this._fb.group({
    productId: [null],
    barcode: [null],
    productName: [null],
    quantity: [null, Validators.required],
  });

  public revisionId: string | null =
    this._activatedRoute.snapshot.paramMap.get('revisionId');
  public productId: string | null =
    this._activatedRoute.snapshot.paramMap.get('productId');

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.productForm.patchValue({
      barcode: this.productId,
      productName: 'Coca-cola 1л.',
    });
    this.productForm.controls.barcode.disable();
    this.productForm.controls.productName.disable();
  }

  public sumbit() {
    this._snackBar.open('Товар добавлен. Изменения сохранены.', 'Закрыть', {
      duration: 3000,
    });
    this._router.navigateByUrl(
      urlValues.dashboard + '/' + urlValues.revision + '/' + this.revisionId
    );
  }
}
