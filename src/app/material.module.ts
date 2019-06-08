import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

const modules = [MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
