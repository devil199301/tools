import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import {ListboxModule} from 'primeng/listbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SpinnerModule} from 'primeng/spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // PrimeNG
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    PanelMenuModule,
    CheckboxModule,
    InputSwitchModule,
    ListboxModule,
    InputTextareaModule,
    SpinnerModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    InputTextModule,
    // PrimeNG
    RadioButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    PanelMenuModule,
    CheckboxModule,
    InputSwitchModule,
    ListboxModule,
    InputTextareaModule,
    SpinnerModule
  ],
  declarations: []
})
export class SharedModule { }
