import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {PanelMenuModule} from 'primeng/panelmenu';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    RadioButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    PanelMenuModule
  ],
  exports:[
    FormsModule,
    HttpClientModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    AngularFontAwesomeModule,
    PanelMenuModule
    ],
  declarations: []
})
export class SharedModule { }
