import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productos:any[] = [];

  agregarProducto(producto:any){

    this.productos.push(producto);

  }

  obtenerProductos(){

    return this.productos;

  }

  eliminarProducto(id:number){

    this.productos = this.productos.filter((producto:any) => producto.id != id);

  }

}