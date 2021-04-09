import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {

    this.cargaInfo();

  }

  private cargaInfo() {
    this.http.get('https://angular-porfolio-b3bc9-default-rtdb.firebaseio.com/productor_idx.json').subscribe((resp: any[]) => {
      this.productos = resp;
      this.cargada = true;
      // console.log(resp);
    }
    );

  }
}
