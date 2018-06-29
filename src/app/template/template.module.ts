import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotmachineComponent } from './slotmachine/slotmachine.component';
import { SharedModule } from '../shared/shared.module';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InputSwitchModule
  ],
  declarations: [SlotmachineComponent],
  exports: []
})
export class TemplateModule { }
