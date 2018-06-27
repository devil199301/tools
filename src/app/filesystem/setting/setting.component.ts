import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  path = 'D:/GPK/Theme/';

  constructor() { }

  ngOnInit() {
    console.log(123)
  }

}