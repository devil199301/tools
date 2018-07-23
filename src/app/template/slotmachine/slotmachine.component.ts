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

  /**
   * 要產template的陣列
   */
  outputClick = [];

  /**
   * template element li > <div class="pic">
   */
  div = false;

  /**
   * template element li > <p class="text">
   */
  text = false;

  /**
   * 圖片來源
   */
  imgPath = 'E:/slot/';

  /**
   * 圖片輸出位置
   */
  outPath = 'E:/outputDir';

  /**
   * 輸出template的字串
   */
  output = '';

  /**
   * 輸出template css的字串
   */
  outputCss = '';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  /**
   * 取圖片名稱
   * @param {*} [move] 只取圖片?或搬到別的路徑+更名
   */
  getDirector(move?: boolean) {
    let tomove = false;
    let outpath = '';
    let params;

    if (move) {
      tomove = true;
      outpath = this.outPath;
    }

    params = {
      path: this.imgPath,
      tomove: tomove,
      outpath: outpath
    };

    this.http.post<any>('/api/getDirectory.php', params).subscribe(
      data => {
        for (let i = 0; i < this.outputClick.length; i++) {
          this.outputClick[i]['gameList'] = data[this.outputClick[i]['name']];
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * 複製按鈕
   * @param {*} inputElement 要複製的內容(id)
   */
  copyButton(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
  }

  /**
   * 自訂義ng-click開關
   * @param {*} event event
   * @param {*} index index
   */
  customChange(event: any, index: any) {
    const gameListCount = this.outputClick[index]['gameList'].split(',').length;
    if (event.checked) {
      this.outputClick[index]['customClick'] = [];
      for (let j = 0; j < gameListCount; j++) {
        this.outputClick[index]['customClick'].push(
          this.outputClick[index]['defaultClick']
        );
      }
    }
  }

  /**
   * 產生HTMl、CSS
   */
  clickFunction() {
    let ul = '';
    let li = '';
    let gameitemArray = [];

    let css = '';

    for (let i = 0; i < this.outputClick.length; i++) {
      // 遊戲名稱 input string to array
      if (typeof this.outputClick[i]['gameList'] === 'string') {
        this.outputClick[i]['gameList'] = this.outputClick[i]['gameList'].split(',');
      }

      if (this.outputClick[i]['gameList'] === undefined) {
        alert(this.outputClick[i]['name'] + '沒設定遊戲');
        return;
      }

      gameitemArray = this.outputClick[i]['gameList'];

      // #region 長HTML
      for (let j = 0; j < gameitemArray.length; j++) {
        let clickList = []; // 放click用的
        // 假如有自訂click，就拿自訂的，且把input string to array
        if (this.outputClick[i]['custom'] && typeof (this.outputClick[i]['customClick']) === 'string') {
          clickList = this.outputClick[i]['customClick'].split(',');
        } else {
          clickList[j] = this.outputClick[i]['defaultClick'];
        }
        if (this.div && this.text) {
          // tslint:disable-next-line:max-line-length
          li += `<li data-img="${j + 1}" ng-click="${clickList[j]}"><div class="pic"></div><p class="text">${gameitemArray[j]}</p></li>\n`;
        } else if (this.div) {
          // tslint:disable-next-line:max-line-length
          li += `<li data-img="${j + 1}" ng-click="${clickList[j]}"><div class="pic"></div>${gameitemArray[j]}</li>\n`;
        } else if (this.text) {
          // tslint:disable-next-line:max-line-length
          li += `<li data-img="${j + 1}" ng-click="${clickList[j]}"><p class="text">${gameitemArray[j]}</p></li>\n`;
        } else {
          // tslint:disable-next-line:max-line-length
          li += `<li data-img="${j + 1}" ng-click="${clickList[j]}">${gameitemArray[j]}</li>\n`;
        }
      }
      // tslint:disable-next-line:max-line-length
      ul += `<ul class="gameitem ${this.outputClick[i]['name']}game" ng-show="show=='${this.outputClick[i]['name']}'" ng-cloak>\n${li}</ul>\n`;
      li = ``;
      // #endregion 長HTML

      // #region 長CSS
      for (let j = 0; j < gameitemArray.length; j++) {
        if (this.div) {
          css += `.gameitem.${this.outputClick[i]['name']}game>li[data-img="${j + 1}"] div:before {
            background-image: url('--replace--/${this.outputClick[i]['name']}/${j + 1}.png'); \n}\n`;
        } else {
          css += `.gameitem.${this.outputClick[i]['name']}game>li[data-img="${j + 1}"] {
            background-image: url('--replace--/${this.outputClick[i]['name']}/${j + 1}.png'); \n}\n`;
        }
      }
      // #endregion 長CSS
    }
    this.output = ul;
    this.outputCss = css;
  }
}

// tslint:disable-next-line:class-name
interface slotDetail {
  [index: number]: {
    name: string;
    defaultClick: string;
    gameList?: Array<string>;
    custom: boolean;
    customClick?: Array<string>;
  };
}
