import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { TrelloService } from './trello.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [TrelloService],
  declarations: [ListComponent]
})
export class TrelloModule { }
