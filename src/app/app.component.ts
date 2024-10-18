import { Component } from '@angular/core';
import { InvoiceComponent } from './components/invoice/invoice.component';  // Importa InvoiceComponent
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Es un componente standalone
  imports: [RouterOutlet, InvoiceComponent],  // Asegúrate de importar InvoiceComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-facturacion';
}
