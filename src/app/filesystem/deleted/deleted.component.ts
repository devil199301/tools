import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileSetting } from '../filesystem.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  fileSetting: fileSetting;

  msgs: Message[] = [];

  params;

  constructor(private filesystemService: FilesystemService) { }

  ngOnInit() {
    this.fileSetting = this.filesystemService.getfileSetting();
    this.fileSetting.deleteType = 'default';
  }

  deletedFile() {
    this.fileSetting.action = 'delete';

    this.filesystemService.processingFile(this.fileSetting)
      .subscribe(
        (data) => {
          console.log('ok');
        }, error => {}
      );
  }

  changeMsgs(severity, summary): void {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary });
  }
}
