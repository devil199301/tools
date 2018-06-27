import { Component, OnInit } from '@angular/core';
import { FilesystemService } from '../filesystem.service';


@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {

  pathType = 'default';
  path:string;
  customPath: string;

  constructor(private filesystemService: FilesystemService) { }

  ngOnInit() {
  }

}
