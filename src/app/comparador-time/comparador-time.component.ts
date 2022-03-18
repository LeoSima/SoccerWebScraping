import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector:'app-comparador-time',
  templateUrl:'./comparador-time.component.html',
  styleUrls: ['./comparador-time.component.scss']
})

export class ComparadorTimeComponent{

  limpar(){
    $('#imgTime1_div').find('img').remove();
    $('#imgTime2_div').find('img').remove();
  }

  selecionaTemporada (ano: string) {
    $('#dropdownMenuButton').text(ano);
  }
}
