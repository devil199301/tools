import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileAction } from '../filesystem.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})

export class GenerateComponent implements OnInit {

  site_name: string;
  site_type = 'Portal';
  params: fileAction;
  path: string;

  constructor(private filesystemService: FilesystemService) {
  }

  ngOnInit() {
  }

  buttonClick(actionType) {

    this.params = {
      'action': actionType,
      'site_code': this.site_name,
      'site_type': this.site_type
    };

    if (actionType === 'selectDelete' && this.path === undefined) {
      console.log('路徑不可為空');
      return;
    } else {
      this.params.path = this.path;
    }
    this.filesystemService.generate(this.params);
  }
}
