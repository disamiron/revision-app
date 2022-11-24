import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urlValues } from 'src/app/shared/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public readonly urlValues = urlValues;

  constructor(public router: Router) {}
}
