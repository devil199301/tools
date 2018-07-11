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
    { name: 'ag', defaultClick: 'toAgHtml()', custom: false },
    { name: 'bb', defaultClick: 'toBbGame()', custom: false },
    { name: 'mg', defaultClick: 'toMgFlash()', custom: false },
    { name: 'pt', defaultClick: 'toPtFlash()', custom: false },
    { name: 'sg', defaultClick: 'toSgFlash()', custom: false },
    { name: 'fish', defaultClick: 'toFish()', custom: false },
    { name: 'gns', defaultClick: 'toGnsHtml()', custom: false },
    { name: 'mw', defaultClick: 'toMwHtml()', custom: false },
    { name: 'hb', defaultClick: 'toHabaHtml()', custom: false },
    { name: 'pp', defaultClick: 'toPrgFlash()', custom: false },
    { name: 'gpi', defaultClick: 'toGpiFlash()', custom: false },
    { name: 'jdb', defaultClick: 'toJdbHtml()', custom: false },
    { name: 'cq9', defaultClick: 'toCq9Html()', custom: false },
    { name: 'ne', defaultClick: 'toNetentHtml()', custom: false },
    // { name: 'gpk', defaultClick: 'toGpkCandy()', custom: false },
    { name: 'ga', defaultClick: 'toGameArtHtml()', custom: false },
    { name: 'rt', defaultClick: 'toRedTigerHtml()', custom: false },
    { name: 'pg', defaultClick: 'toPgHtml()', custom: false },
    { name: 'lg', defaultClick: 'toLgHtml()', custom: false },
    { name: 'isb', defaultClick: 'toIsbHtml()', custom: false },
    { name: 'pts', defaultClick: 'toPtsHtml()', custom: false },
    { name: 'png', defaultClick: 'toPngHtml()', custom: false }
  ];

  outputClick = [];

  gamelistnum = 8;

  div = false;

  text = false;

  imgPath = 'E:/ng6/test/slot/';

  outPath = 'E:/ng6/test/321/';

  output = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getDirector(move?) {

    let tomove = false;
    let outpath = '';
    let params;

    if (move) {
      tomove = true;
      outpath = this.outPath;
    }

    params = {
      'path': this.imgPath,
      'tomove': tomove,
      'outpath': outpath
    };

    this.http.post<any>('/api/getDirectory.php', params)
      .subscribe(
        (data) => {
          for (let i = 0; i < this.outputClick.length; i++) {
            this.outputClick[i]['gameList'] = data[this.outputClick[i]['name']];
          }
        }, error => {
          console.log(error);
        });
  }

  customChange(e, i) {
    if (e.checked) {
      this.clickList[i]['customClick'] = [];
      for (let j = 1; j < this.clickList[i]['gameList'].length; j++) {
        this.clickList[i]['customClick'].push(this.clickList[i]['defaultClick']);
      }
    }
  }

  clickFunction() {
    let ul = '';
    let li = '';
    let gameitemArray = [];

    for (let i = 0; i < this.outputClick.length; i++) {

      // 遊戲名稱 input string to array
      if (typeof (this.outputClick[i]['gameList']) === 'string') {
        this.outputClick[i]['gameList'] = (this.outputClick[i]['gameList']).split(',');
      }

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

        let clickList = []; // 放click用的

        // 假如有自訂click，就拿自訂的，且把input string to array
        if (this.outputClick[i]['custom'] && typeof (this.outputClick[i]['customClick']) === 'string') {
          this.outputClick[i]['customClick'] = (this.outputClick[i]['customClick']).split(',');
          clickList = this.outputClick[i]['customClick'];
        } else {
          clickList[j] = this.clickList[i]['defaultClick'];
        }

        if (this.div && this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + this.outputClick[i]['name'] + (j + 1) + '" ng-click="' + clickList[j] + '"><div class="pic"></div><p class="text">' + gameitemArray[j] + '</p></li>';
        } else if (this.div) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + this.outputClick[i]['name'] + (j + 1) + '" ng-click="' + clickList[j] + '"><div class="pic"></div>' + gameitemArray[j] + '</li>';
        } else if (this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + this.outputClick[i]['name'] + (j + 1) + '" ng-click="' + clickList[j] + '"><p class="text">' + gameitemArray[j] + '</p></li>';
        } else {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + this.outputClick[i]['name'] + (j + 1) + '" ng-click="' + clickList[j] + '">' + gameitemArray[j] + '</li>';
        }
      }
      // tslint:disable-next-line:max-line-length
      ul = ul + '<ul class="gameitem ' + this.outputClick[i]['name'] + 'game" ng-show="show==\'' + this.outputClick[i]['name'] + '\'" ng-cloak>' + li + '</ul>';
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
    defaultClick: string;
    gameList?: Array<string>;
    custom: boolean;
    customClick?: Array<string>;
  };
}
