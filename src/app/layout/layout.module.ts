import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PanelMenuModule,
    RouterModule,  
    MenuModule  
  ],
  declarations: [MainComponent, HelloComponent],
  exports:[]
})
export class LayoutModule { }
