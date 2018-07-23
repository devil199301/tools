import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileSetting } from '../filesystem.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {

  fileSetting: fileSetting;

  constructor(private filesystemService: FilesystemService) { }

  ngOnInit() {
    this.fileSetting = this.filesystemService.getfileSetting();
  }

  update(newData) {
    this.filesystemService.upDatafileSetting(newData);
  }

}
