import { Component, OnInit } from '@angular/core';
import { FilesystemService, fileSetting } from '../filesystem.service';


@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  fileSetting: fileSetting;

  constructor(private filesystemService: FilesystemService) { }

  ngOnInit() {
    this.fileSetting = this.filesystemService.getfileSetting();
    this.fileSetting.deleteType = 'default';
  }

}
