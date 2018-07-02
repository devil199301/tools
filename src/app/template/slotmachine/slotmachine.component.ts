import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.scss']
})

export class SlotmachineComponent implements OnInit {

  // 遊戲click
  // tslint:disable-next-line:max-line-length
  clickList = ['toMgFlash()', 'toPtFlash()', 'toBbGame()', 'toSgFlash()', 'toFish()', 'toGnsHtml()', 'toAgHtml()',
    'toMwHtml()', 'toHabaHtml()', 'toPrgFlash()', 'toGpiFlash()', 'toJdbHtml()', 'toCq9Html()',
    'toNetentHtml()', 'toRedTigerHtml()'];
  clickList2 = [
    { name: 'MW', click: 'toMgFlash()', gameList: '冰上曲棍球,宝石连线,胸围银行,不朽的浪漫,伴娘我最大,海滨嘉年华,淑女之夜,舞龙' },
    { name: 'PT', click: 'toPtFlash()', gameList: 'PT1,PT2,PT3,PT4,PT5,PT6,PT7,PT8' },
    { name: 'BB', click: 'toBbGame()', gameList: 'BB1,BB2,BB3,PT4,PT5,PT6,PT7,PT8' },
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
  // 預期放class名稱
  // tslint:disable-next-line:max-line-length
  classList = ['mg', 'pt', 'bb', 'sg', 'fish', 'gns', 'ag', 'mw', 'hb', 'pp', 'gpi', 'jdb', 'cq9', 'ne', 'rt'];

  lobbyList = [];

  gameList = {
    mg: ['冰上曲棍球', '宝石连线', '胸围银行', '不朽的浪漫', '伴娘我最大', '海滨嘉年华', '淑女之夜', '舞龙'],
    pt: ['古怪猴子', '艾丽卡', '百变小女巫', '百慕大三角洲', '超级蓝', '船长的宝藏', '招财进宝', '盗墓迷城']

  };

  gamelistnum = 8;

  div;

  text;

  templateCode = '';

  output = '';
  detail;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getDirector() {
    this.http.post<any>('/api/getDirectory.php', null).subscribe((data) => this.detail = data);
  }

  clickFunction() {
    let ul = '';
    let li = '';
    let gameitem = '';
    let gameitemArray = [];
    for (let i = 0; i < this.outputClick.length; i++) {

      if (this.outputClick[i]['gameList'] === undefined) {
        alert(this.outputClick[i]['name'] + '沒設定遊戲');
        return;
      }

      gameitem = this.outputClick[i]['gameList'];

      if (gameitem.split(',').length !== this.gamelistnum) {
        alert(this.outputClick[i]['name'] + '數量錯誤');
        return;
      }

      gameitemArray = gameitem !== '' ? gameitem.split(',') : [];

      for (let j = 0; j < gameitemArray.length; j++) {
        if (this.div && this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><div class="pic"></div><p class="text">' + gameitemArray[j] + '</p></li>';
        } else if (this.div) {
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><div class="pic"></div>' + gameitemArray[j] + '</li>';
        } else if (this.text) {
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '"><p class="text">' + gameitemArray[j] + '</p></li>';
        } else {
          li = li + '<li class="' + (this.outputClick[i]['name']).toLowerCase() + (j + 1) + '" ng-click="' + this.outputClick[i]['click'] + '">' + gameitemArray[j] + '</li>';
        }
      }
      ul = ul + '<ul class="' + (this.outputClick[i]['name']).toLowerCase() + 'game" ng-show="show==\'' + (this.outputClick[i]['name']).toLowerCase() + '\'" ng-cloak>' + li + '</ul>';
      li = '';
    }

    this.output = ul;

  }

}
