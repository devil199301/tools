import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  fileSystem = {
    vsts: 'E:/VSTS',
    originalFile: 'E:/',
    target: 'E:/'
  }

  constructor() { }

  ngOnInit() {
    console.log(this.fileSystem);
  }

}
