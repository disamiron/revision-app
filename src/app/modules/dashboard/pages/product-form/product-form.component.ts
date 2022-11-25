import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm.patchValue({
      barcode: this.productId,
      productName: 'Coca-cola 5л. в банке',
    });
    this.productForm.controls.barcode.disable();
    this.productForm.controls.productName.disable();
  }
}
