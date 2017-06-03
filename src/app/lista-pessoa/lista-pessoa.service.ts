import { Injectable } from '@angular/core';

@Injectable()
export class ListaPessoaService {

  nomesPessoas: string [] = ['Ricardo', 'Lee', 'Felipe'];
  constructor() { }

  getPessoas(){
    return  this.nomesPessoas;
 }

 setPessoa(nome:string) : void {
   this.nomesPessoas.push(nome);
 }

 msgAlerta(): void {
    alert('Workshop Angular Indra!');
  }
}
