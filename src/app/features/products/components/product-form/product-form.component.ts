import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  nombre = '';
  precio: number | null = null;
  productoEditandoId: number | null = null;

  @Output() operacionCompletada = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  @Input()
  set productoParaEditar(producto: Producto | null) {
    if (producto) {
      this.productoEditandoId = producto.id;
      this.nombre = producto.nombre;
      this.precio = producto.precio;
    }
  }

  get formularioValido(): boolean {
    return (
      this.nombre.trim() !== '' &&
      this.precio !== null &&
      this.precio > 0
    );
  }

  get esEdicion(): boolean {
    return this.productoEditandoId !== null;
  }

  enviar(): void {
    if (!this.formularioValido || this.precio === null) {
      return;
    }

    if (this.esEdicion && this.productoEditandoId !== null) {
      this.productService.actualizarProducto(
        this.productoEditandoId,
        this.nombre.trim(),
        this.precio
      );
    } else {
      const producto: Producto = {
        id: this.productService.crearId(),
        nombre: this.nombre.trim(),
        precio: this.precio
      };
      this.productService.agregarProducto(producto);
    }

    this.limpiarFormulario();
    this.operacionCompletada.emit();
  }

  limpiarFormulario(): void {
    this.nombre = '';
    this.precio = null;
    this.productoEditandoId = null;
  }
}
