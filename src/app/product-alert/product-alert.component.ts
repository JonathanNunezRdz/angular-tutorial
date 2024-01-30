import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrl: './product-alert.component.css',
  standalone: false,
})
export class ProductAlertComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
