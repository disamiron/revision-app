import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appName, urlValues } from 'src/app/shared/constants';
import { requiredMsg } from 'src/app/shared/regex';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  readonly requiredMsg = requiredMsg;

  readonly appName = appName;

  public isPasswordHide: boolean = true;

  constructor(private _fb: FormBuilder, private _router: Router) {}

  public loginFormGroup: FormGroup = this._fb.group({
    login: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  public submit() {
    this._router.navigateByUrl(urlValues.dashboard);
  }
}
