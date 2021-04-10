import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: any[] = [];
  productosFiltrados: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {

    this.cargaInfo();

  }

  private cargaInfo() {

    return new Promise((resolve, reject) => {

      this.http.get('https://angular-porfolio-b3bc9-default-rtdb.firebaseio.com/productor_idx.json').subscribe((resp: any[]) => {
        this.productos = resp;
        this.cargada = true;
        resolve(this);
      });
    });

  }

  getProductos(id: string) {
    return this.http.get(`https://angular-porfolio-b3bc9-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    termino = termino.toLowerCase();

    if (this.productos.length === 0) {
      this.cargaInfo().then(() => {
      });
      this.filtrarProductos(termino);
    }
    else {
      this.filtrarProductos(termino);
    }
  }


  private filtrarProductos(termino: String) {

    this.productosFiltrados = this.productos.filter(producto => {

      if (producto.categoria.toLowerCase().indexOf(termino) >= 0 || producto.titulo.toLowerCase().indexOf(termino) >= 0) {
        return producto;
      }

    });

    console.log(this.productosFiltrados);

  }
}
