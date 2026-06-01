import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productos: Producto[] = [];
  private siguienteId = 1;

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter((producto) => producto.id !== id);
  }

  actualizarProducto(id: number, nombre: string, precio: number): void {
    const producto = this.productos.find((p) => p.id === id);
    if (producto) {
      producto.nombre = nombre;
      producto.precio = precio;
    }
  }

  crearId(): number {
    const id = this.siguienteId;
    this.siguienteId++;
    return id;
  }
}
