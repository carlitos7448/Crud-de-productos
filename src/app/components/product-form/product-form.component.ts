import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})
export class ProductForm {

  nombre = '';

  precio:number = 0;

  constructor(private productService:ProductService){

  }

  crearProducto(){

let producto ={

id: Date.now(),

nombre: this.nombre,

precio: this.precio



};

this.productService.agregarProducto(producto);

this.nombre = '';

this.precio = 0;


  }

  }

