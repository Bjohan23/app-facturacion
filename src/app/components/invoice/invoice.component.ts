import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  // Datos ficticios para la factura
  invoiceId: number = 1234;
  invoiceName: string = 'Factura de Ejemplo';
  client = {
    name: 'Juan Pérez',
    address: 'Calle 123, Ciudad, País'
  };
  products = [
    {
      name: 'Laptop Gamer',
      price: 1200,
      quantity: 1,
      description: 'Laptop de alto rendimiento con procesador i7, 16GB RAM y 512GB SSD.'
    },
    {
      name: 'Mouse Inalámbrico',
      price: 50,
      quantity: 2,
      description: 'Mouse ergonómico inalámbrico, ideal para largas horas de uso.'
    },
    {
      name: 'Teclado Mecánico',
      price: 80,
      quantity: 1,
      description: 'Teclado mecánico con retroiluminación RGB y switches mecánicos.'
    },
    {
      name: 'Monitor 27 pulgadas',
      price: 300,
      quantity: 1,
      description: 'Monitor de 27 pulgadas con resolución 1440p y frecuencia de 144Hz.'
    },
    {
      name: 'Auriculares Gaming',
      price: 70,
      quantity: 1,
      description: 'Auriculares con sonido envolvente y micrófono ajustable.'
    }
  ];

  getTotal() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }
}
