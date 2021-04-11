import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPage } from '../interface/info-page-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPage = {};
  cargada = false;

  equipo: any []= [];

  constructor(private http: HttpClient) {

    console.log("Info of the page");
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json').subscribe((resp: infoPage) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
    });

  }

  private cargarEquipo() {
    this.http.get('https://angular-porfolio-b3bc9-default-rtdb.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      this.cargada = true;
      this.equipo = resp;
    });
  }
}
