import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

const modules = [MatButtonModule, MatIconModule, MatTableModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
