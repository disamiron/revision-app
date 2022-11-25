import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revision-search',
  templateUrl: './revision-search.component.html',
  styleUrls: ['./revision-search.component.scss'],
})
export class RevisionSearchComponent {
  public searchFormGroup: FormGroup = this._fb.group({
    searchValue: [null],
  });

  public revisionId: string | null =
    this._activatedRoute.snapshot.paramMap.get('revisionId');

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute
  ) {}
}
