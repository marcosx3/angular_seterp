import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    _exibirHealt : boolean = false;
    _exibirTech : boolean = false;
    _exibirAdm: boolean = false;
 

  constructor() { 
     AOS.init(); //<------ Add this line
  }

  ngOnInit(): void {
  }

 
  mostrar() : void {
     // há necessidade de refatoração
    if(this._exibirAdm == false && this._exibirHealt == false ){
         this._exibirTech = this._exibirTech ? false: true;
    }
    if(this._exibirAdm == false && this._exibirTech == false ){
      this._exibirHealt = this._exibirHealt ? false: true;
    }
    if(this._exibirHealt == false && this._exibirTech == false ){
      this._exibirAdm = this._exibirAdm ? false: true;
    }
  }
}
