import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

  constructor() { }

  // 取得權限
  getauthorize() {
    window.Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true'
      },
      expiration: 'never',
      success: () => console.log(localStorage.trello_token),
      error: () => console.log('error')
    });
  }

}
