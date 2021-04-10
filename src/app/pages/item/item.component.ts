import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interface/producto.descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(public productosService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params.id);
      this.productosService.getProductos(params['id']).subscribe(
        (producto: ProductoDescripcion) => {
          this.producto = producto;
          this.id = params['id'];
          // console.log(producto);
        });
    });
  }
}

