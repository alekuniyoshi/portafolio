import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: any[] = [];

  constructor(private http: HttpClient) {


  }

  private cargaItem() {
    this.http.get("https://angular-porfolio-b3bc9-default-rtdb.firebaseio.com/productos").subscribe((resp: any[]) =>
      this.items = resp);
  }
}
