import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Output() seleccionarProducto = new EventEmitter<Producto>();

  constructor(public productService: ProductService) {}

  onEliminar(id: number): void {
    this.productService.eliminarProducto(id);
  }

  onSeleccionar(producto: Producto): void {
    this.seleccionarProducto.emit(producto);
  }
}
