import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPage } from '../interface/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPage = {};
  cargada = false;

  constructor(private http: HttpClient) {

    console.log("Info of the page");

    this.http.get('assets/data/data-page.json').subscribe((data:infoPage) => {
      this.cargada = true;
      this.info = data;
      console.log(data);
    });
  }
}
