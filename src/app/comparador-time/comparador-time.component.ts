import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector:'app-comparador-time',
  templateUrl:'./comparador-time.component.html',
  styleUrls: ['./comparador-time.component.scss']
})

export class ComparadorTimeComponent{

  limpar(){
    console.log("limpou");
  }

  selecionaTemporada (ano: string) {
    console.log("Ano alterado")
  }
}
