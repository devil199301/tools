import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slotmachine',
  templateUrl: './slotmachine.component.html',
  styleUrls: ['./slotmachine.component.scss']
})
export class SlotmachineComponent implements OnInit {

  // 遊戲click
  // tslint:disable-next-line:max-line-length
  clickList = ['toMgFlash()', 'toPtFlash()', 'toBbGame()', 'toSgFlash()', 'toFish()', 'toGnsHtml()', 'toAgHtml()', 'toMwHtml()', 'toHabaHtml()', 'toPrgFlash()', 'toGpiFlash()', 'toJdbHtml()', 'toCq9Html()', 'toNetentHtml()', 'toRedTigerHtml()'];

  // 預期放class名稱
  // tslint:disable-next-line:max-line-length
  classList = ['mg', 'pt', 'bb', 'sg', 'fish', 'gns', 'ag', 'mw', 'hb', 'pp', 'gpi', 'jdb', 'cq9', 'ne', 'rt'];

  lobbyList = [];

  gameList = {
    mg: ['冰上曲棍球', '宝石连线', '胸围银行', '不朽的浪漫', '伴娘我最大', '海滨嘉年华', '淑女之夜', '舞龙'],
    pt: ['古怪猴子', '艾丽卡', '百变小女巫', '百慕大三角洲', '超级蓝', '船长的宝藏', '招财进宝', '盗墓迷城']

  };

  div;

  text;

  templateCode = '';

  output = '';

  constructor() { }

  ngOnInit() {
  }

  clickFunction() {
    let ul = '';
    let li = '';
    let gameitem = [];
    for (let i = 0; i < this.clickList.length; i++) {
      gameitem = this.gameList[this.classList[i]] !== undefined ? this.gameList[this.classList[i]] : [];
      for (let j = 0; j < gameitem.length; j++) {
        if (this.div && this.text) {
          // tslint:disable-next-line:max-line-length
          li = li + '<li class="' + this.classList[i] + (j + 1) + '" ng-click="' + this.clickList[i] + '"><div class="pic"></div><p class="text">' + gameitem[j] + '</p></li>';
        } else if (this.div) {
          li = li + '<li ng-click="' + this.clickList[i] + '"><div class="pic"></div>' + gameitem[j] + '</li>';
        } else if (this.text) {
          li = li + '<li ng-click="' + this.clickList[i] + '"><p class="text">' + gameitem[j] + '</p></li>';
        } else {
          li = li + '<li ng-click="' + this.clickList[i] + '">' + gameitem[j] + '</li>';
        }
      }
      ul = ul + '<ul class="' + this.classList[i] + '" ng-click="' + this.clickList[i] + '">' + li + '</ul>';
      li = '';
    }

    this.output = ul;

  }

}
