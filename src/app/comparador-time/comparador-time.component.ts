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

    for(var i = 1; i <= 20; i++){
      $('#carouselTime' + i).find('img').remove();
    }

    if (ano == '2021') {

      var time0 = { nome: 'América', img: '../assets/img/times/America.jpg' };

      var time1 = { nome: 'Athletico Paranaense', img: '../assets/img/times/Athletico.jpg' };

      var time2 = { nome: 'Atlético Goianiense', img: '../assets/img/times/Atletico.jpg' };

      var time3 = { nome: 'Atlético Mineiro', img: '../assets/img/times/AtleticoMineiro.jpg' };

      var time4 = { nome: 'Bahia', img: '../assets/img/times/Bahia.jpg'};

      var time5 = { nome: 'Ceará', img: '../assets/img/times/Ceara.jpg'};

      var time6 = { nome: 'Chapecoense', img: '../assets/img/times/Chapecoense.jpg'};

      var time7 = { nome: 'Corinthians', img: '../assets/img/times/Corinthians.jpg'};

      var time8 = { nome: 'Cuiabá', img: '../assets/img/times/Cuiaba.jpg'};

      var time9 = { nome: 'Flamengo', img: '../assets/img/times/Flamengo.jpg'};

      var time10 = { nome: 'Fluminense', img: '../assets/img/times/Fluminense.jpg'};

      var time11 = { nome: 'Fortaleza', img: '../assets/img/times/Fortaleza.jpg'};

      var time12 = { nome: 'Grêmio', img: '../assets/img/times/Gremio.jpg'};

      var time13 = { nome: 'Internacional', img: '../assets/img/times/Internacional.jpg'};

      var time14 = { nome: 'Juventude', img: '../assets/img/times/Juventude.jpg'};

      var time15 = { nome: 'Palmeiras', img: '../assets/img/times/Palmeiras.jpg'};

      var time16 = { nome: 'Red Bull', img: '../assets/img/times/RedBull.jpg'};

      var time17 = { nome: 'Santos', img: '../assets/img/times/Santos.jpg'};

      var time18 = { nome: 'São Paulo', img: '../assets/img/times/SaoPaulo.jpg'};

      var time19 = { nome: 'Sport', img: '../assets/img/times/Sport.jpg'};

      var times = [time0, time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12, time13, time14, time15, time16, time17, time18, time19];

      for (var i = 0; i < times.length; i++){
        var timeTemplate = `<img src="` + times[i].img + `" alt="` + times[i].nome + `">`;

        $('#carouselTime' + (i+1)).append(timeTemplate);
      }

    }
  }
}
