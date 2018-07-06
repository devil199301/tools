import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilesystemService {

  test;

  originalFileSetting: fileSetting = {
    vsts: 'E:/VSTS',
    originalFile: 'E:/',
    target: 'E:/',
    site_type: 'Portal'
  };

  fileSetting: fileSetting;

  FilesystemService = 'FilesystemService';

  constructor(private http: HttpClient) {
  }

  getfileSetting() {
    if (localStorage.getItem('filesystem') !== null) {
      this.fileSetting = JSON.parse(localStorage.getItem('filesystem'));
    } else {
      localStorage.setItem('filesystem', JSON.stringify(this.originalFileSetting));
      this.fileSetting = this.originalFileSetting;
    }
    return this.fileSetting;
  }

  upDatafileSetting(newData) {
    this.fileSetting = newData;
    localStorage.setItem('filesystem', JSON.stringify(this.fileSetting));
  }

  processingFile(params) {
    params = Object.assign(params, this.fileSetting);
    return this.http.post<any>('/api/theme_file.php', params);
  }

}

// tslint:disable-next-line:class-name
export interface fileAction {
  action: string;
  site_code?: string;
  site_type?: string;
  path?: string;
}

// tslint:disable-next-line:class-name
export interface fileSetting {
  action?: string;
  vsts?: string;
  originalFile: string;
  target?: string;
  customPath?: string;
  deleteType?: string;
  site_code?: string;
  site_type?: string;
}
