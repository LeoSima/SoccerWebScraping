import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector:'app-comparador-time',
  templateUrl:'./comparador-time.component.html',
  styleUrls: ['./comparador-time.component.scss']
})

export class ComparadorTimeComponent{

  limpar(){

    $('#nomeTime1').text('-');
    $('#nomeTime2').text('-');

    $('#imgTime1_div').find('img').remove();
    $('#imgTime2_div').find('img').remove();

    $('#sequenciaTime1').text('--');
    $('#sequenciaTime2').text('--');
    $('#jogosTime1').text('--');
    $('#jogosTime2').text('--');
    $('#vitoriasTime1').text('--');
    $('#vitoriasTime2').text('--');
    $('#empatesTime1').text('--');
    $('#empatesTime2').text('--');
    $('#derrotasTime1').text('--');
    $('#derrotasTime2').text('--');

  }

  selecionaTemporada (ano: string) {
    $('#dropdownMenuButton').text(ano);
  }
}
