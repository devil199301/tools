import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../trello.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  Board: Board;
  BoardDetail;
  Cards;
  constructor(private trelloService: TrelloService, private http: HttpClient) { }

  ngOnInit() {
    // 先取權限
    this.trelloService.getauthorize();
  }

  // 取得看板
  getBoardList(): void {
    window.Trello.get('/member/me/boards', (data) => { this.Board = data; }, (error) => { console.log(error); });
  }

  // 取看版裡面的分類
  getBoardDetail(id): void {
    window.Trello.get(`/boards/${id}/lists`, (data) => { this.BoardDetail = data; }, (error) => { console.log(error); });
  }

  // 取分類裡面的卡片清單
  getCardsList(id): void {
    window.Trello.get(`/lists/${id}/cards`, (data) => { this.Cards = data; }, (error) => { console.log(error); });
  }

  // 取卡片詳細資料
  getCardDetail(id): void {
    window.Trello.get(`/cards/${id}`, (data) => { console.log(data); }, (error) => { console.log(error); });
  }

  // 取卡片附件
  getAttachments(id): void {
    window.Trello.get(`/cards/${id}/attachments`, (data) => { console.log(data); }, (error) => { console.log(error); });
  }

  // 取會員資料
  getMembers(): void {
    window.Trello.get('/members/5a2619c264f3dccf42be2007', (data) => { console.log(data); }, (error) => { console.log(error); });
  }

}

interface Board {
  [index: number]:
  {
    name: string;
    id: string;
  };
}
