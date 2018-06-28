import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileAction } from '../filesystem.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})

export class GenerateComponent implements OnInit {

  site_name: string;
  site_type = 'Portal';
  params: fileAction;
  path: string;
  status: boolean;
  msgs: Message[] = [];

  constructor(private filesystemService: FilesystemService) {
  }

  ngOnInit() {
  }

  buttonClick(actionType): void {

    this.status = true;
    this.changeMsgs('info','處理中');

    if (actionType === 'selectDelete' && this.path === undefined) {
      this.status = false;
      this.changeMsgs('error','路徑不可為空')
    } else if (actionType === 'selectDelete' && this.path !== undefined) {
      this.params.path = this.path;
    };

    this.params = {
      'action': actionType,
      'site_code': this.site_name,
      'site_type': this.site_type
    };

    this.filesystemService.processingFile(this.params)
      .subscribe(
        (data) => {
          this.status = false;
          this.changeMsgs('success',data.msg)
        });
  }

  changeMsgs(severity, summary): void {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary });
  }
}
