import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-colaboradores',
  templateUrl: './lista-colaboradores.component.html',
  styleUrls: ['./lista-colaboradores.component.scss']
})
export class ListaColaboradoresComponent implements OnInit {

  titulo = "Informações Colaborador"
  colaborador = {
      id: 7,
      nome: 'Nathan Carlos Exercicio',
      salario: 4500,
      cargo: 'Dev Pl',
      imagem: "https://avatars.githubusercontent.com/u/32680502?v=4"
    };

  constructor() { }

  ngOnInit(): void {
  }

}
