import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { FilesystemService } from './filesystem.service';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './setting/setting.component';
import { DeletedComponent } from './deleted/deleted.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GenerateComponent, SettingComponent, DeletedComponent],
  exports: [GenerateComponent],
  providers: [FilesystemService]
})
export class FilesystemModule { }
