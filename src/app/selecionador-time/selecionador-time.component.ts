import { Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: 'app-selecionador-time',
  templateUrl: './selecionador-time.component.html',
  styleUrls: ['./selecionador-time.component.scss']
})

export class SelecionadorTimeComponent {

  private numTime = 1;

  public selecionarTime (img: string, time: string, sequencia: string, jogos: number, vitorias: number, empates: number, derrotas: number): void {

    this.alternaTime();

    var imgTemplate = `<img id="imgTime` + this.numTime + `" src="` + img + `" alt="` + time + `">`

    if(this.numTime == 2 && img == $('#imgTime1').attr('src')) {

      var errorTemplate = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                              Os times não podem ser iguais.
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>`;

      if($('#errorTimesIguais').find('div').text() == '')
        $('#errorTimesIguais').append(errorTemplate);

      this.alternaTime();

    } else if ($('#imgTime' + this.numTime + '_div').find('img').length > 0) {

      var errorTemplate = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                              Apenas 2 times são permitidos.
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>`;

      if($('#errorQtdTimes').find('div').text() == '')
        $('#errorQtdTimes').append(errorTemplate);

    } else {

      $('#nomeTime' + this.numTime).text(time);
      $('#imgTime' + this.numTime + '_div').append(imgTemplate);
      $('#sequenciaTime' + this.numTime).text(sequencia);
      $('#jogosTime' + this.numTime).text(jogos);
      $('#vitoriasTime' + this.numTime).text(vitorias);
      $('#empatesTime' + this.numTime).text(empates);
      $('#derrotasTime' + this.numTime).text(derrotas);

    }

  }

  private alternaTime(): void {

    if ($('#imgTime1_div').find('img').attr('src') == undefined || $('#imgTime1_div').find('img').attr('src') == null || $('#imgTime1_div').find('img').attr('src') == '') {
      this.numTime = 1;
    } else if (this.numTime == 1){
      this.numTime = 2;
    } else if (this.numTime == 2) {
      this.numTime = 1;
    }

  }

}
