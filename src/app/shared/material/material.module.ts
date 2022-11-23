import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  providers: [],
})
export class MaterialModule {}
