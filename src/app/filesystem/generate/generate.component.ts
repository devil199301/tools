import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileAction, fileSetting } from '../filesystem.service';
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
  fileSetting: fileSetting;

  constructor(private filesystemService: FilesystemService) {
  }

  ngOnInit() {
    // 先取設定回來
    this.fileSetting = this.filesystemService.getfileSetting();
  }

  buttonClick(actionType): void {

    this.status = true;
    this.changeMsgs('info', '處理中');

    this.params = {
      'action': actionType,
      'site_code': this.site_name,
      'site_type': this.site_type
    };

    this.filesystemService.processingFile(this.params)
      .subscribe(
        (data) => {
          const resp = data;
          this.status = false;
          this.changeMsgs(resp.status, data.msg);
        }, (error) => {
          this.status = false;
          this.changeMsgs('error', '出錯勒');
          console.log(error);
        });
  }

  changeMsgs(severity, summary): void {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary });
  }
}
