import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.scss']
})

export class SlotmachineComponent implements OnInit {

  // 遊戲click
  clickList: slotDetail = [
    { name: 'MW', click: 'toMgFlash()' },
    { name: 'PT', click: 'toPtFlash()' },
    { name: 'BB', click: 'toBbGame()' },
    { name: 'SG', click: 'toSgFlash()' },
    { name: 'FISH', click: 'toFish()' },
    { name: 'GNS', click: 'toGnsHtml()' },
    { name: 'AG', click: 'toAgHtml()' },
    { name: 'MW', click: 'toMwHtml()' },
    { name: 'HB', click: 'toHabaHtml()' },
    { name: 'PP', click: 'toPrgFlash()' },
    { name: 'GPI', click: 'toGpiFlash()' },
    { name: 'JDB', click: 'toJdbHtml()' },
    { name: 'CQ9', click: 'toCq9Html()' },
    { name: 'NE', click: 'toNetentHtml()' },
    { name: 'RT', click: 'toRedTigerHtml()' }
  ];

  outputClick = [];

  gamelistnum = 6;

  div = false;

  text = false;

  imgPath = 'C:/Users/YenChih/Downloads/MZ001-01/slot';

  templateCode = '';

  output = '';
  detail;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getDirector() {
    this.http.post<any>('/api/getDirectory.php', { 'path': this.imgPath })
      .subscribe(
        (data) => {
          for (let i = 0; i < this.outputClick.length; i++) {
            const key = (this.outputClick[i]['name']).toLowerCase();
            this.outputClick[i]['gameList'] = data[key];
          }
        }, error => {
          console.log(error);
      });
  }

  clickFunction() {
    let ul = '';
    let li = '';
    let gameitemArray = [];
    for (let i = 0; i < this.outputClick.length; i++) {

      if (this.outputClick[i]['gameList'] === undefined) {
        alert(this.outputClick[i]['name'] + '沒設定遊戲');
        return;
      }


      if (this.outputClick[i]['gameList'].length !== this.gamelistnum) {
        alert(this.outputClick[i]['name'] + '數量錯誤');
        return;
      }

      gameitemArray = this.outputClick[i]['gameList'];

      for (let j = 0; j < gameitemArray.length; j++) {
        if (this.div && this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><div class="pic"></div><p class="text">' + gameitemArray[j] + '</p></li>';
        } else if (this.div) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><div class="pic"></div>' + gameitemArray[j] + '</li>';
        } else if (this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><p class="text">' + gameitemArray[j] + '</p></li>';
        } else {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '">' + gameitemArray[j] + '</li>';
        }
      }
      // tslint:disable-next-line:max-line-length
      ul = ul + '<ul class="' + (this.outputClick[i]['name']).toLowerCase() + 'game" ng-show="show==\'' + (this.outputClick[i]['name']).toLowerCase() + '\'" ng-cloak>' + li + '</ul>';
      li = '';
    }

    this.output = ul;

  }

}

// tslint:disable-next-line:class-name
interface slotDetail {
  [index: number]:
  {
    name: string;
    click: string;
    gameList?: Array<string>;
  };
}
