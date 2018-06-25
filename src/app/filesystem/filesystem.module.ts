import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { FilesystemService } from './filesystem.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    HttpClientModule,
  ],
  declarations: [GenerateComponent],
  exports:[GenerateComponent],
   providers:[FilesystemService]
})
export class FilesystemModule { }
