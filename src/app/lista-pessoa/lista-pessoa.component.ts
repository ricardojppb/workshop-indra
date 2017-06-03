import { ListaPessoaService } from './lista-pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [ListaPessoaService]
})
export class ListaPessoaComponent implements OnInit {
  
  pessoas: string[];
  nome: string = 'Ricardo Silvestre';
  
  constructor(private service: ListaPessoaService) {
    this.pessoas = service.getPessoas();

   }

  ngOnInit() {
  }

  listar() {
  }

  enviarNome(){
    this.service.setPessoa(this.nome);
    this.nome = '';
  
  }
}
