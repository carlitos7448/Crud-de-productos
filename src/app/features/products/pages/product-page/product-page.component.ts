import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  productoSeleccionado: Producto | null = null;

  onSeleccionarProducto(producto: Producto): void {
    this.productoSeleccionado = { ...producto };
  }
}
