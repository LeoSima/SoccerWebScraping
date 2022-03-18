import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector:'app-comparador-time',
  templateUrl:'./comparador-time.component.html',
  styleUrls: ['./comparador-time.component.scss']
})

export class ComparadorTimeComponent{

  limpar(){
    $('#imgTime1').remove();
    $('#imgTime2').remove();
  }

  selecionaTemporada (ano: string) {
    $('#dropdownMenuButton').text(ano);
  }
}
