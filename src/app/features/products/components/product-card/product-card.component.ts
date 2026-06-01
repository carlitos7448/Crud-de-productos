import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() producto!: Producto;

  @Output() eliminar = new EventEmitter<number>();
  @Output() seleccionar = new EventEmitter<Producto>();

  onEliminar(event: Event): void {
    event.stopPropagation();
    this.eliminar.emit(this.producto.id);
  }

  onSeleccionar(): void {
    this.seleccionar.emit(this.producto);
  }
}
