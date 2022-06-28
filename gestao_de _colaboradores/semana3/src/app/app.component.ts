import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  title = 'Colaboradores';
  id = '7';
  colaborador = 'Nathan Carlos';
  salario = 'R$ 4500,00';
  cargo = 'Dev Pl';
}
