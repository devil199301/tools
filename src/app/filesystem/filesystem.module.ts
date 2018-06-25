import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { FilesystemService } from './filesystem.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GenerateComponent],
  exports:[GenerateComponent],
  providers:[FilesystemService]
})
export class FilesystemModule { }
