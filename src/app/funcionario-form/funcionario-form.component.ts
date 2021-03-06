import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent{
  ultimoId = 0;
  nome = 'Antonia';
  adicionado = false;
 @Output('criado') funcionarioAdicionado = new EventEmitter();

adicionar(){
// console.log (`Adicionando ${this.nome}`)
this.adicionado = true;
const funcionario = ({
  id: ++this.ultimoId, 
  nome: this.nome
});
this.funcionarioAdicionado.emit(funcionario);
}
}



