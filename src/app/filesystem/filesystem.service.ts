import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesystemService {

  constructor(private http: HttpClient) {
  }

  generate(params) {
    return this.http.post<any>('/api/theme_file.php', params)
      .subscribe(
        (data) => {
          console.log(data.msg);
        });
  }
}

export interface fileAction{
  action: string;
  site_code?: string;
  site_type?: string;
  path?: string;
}
