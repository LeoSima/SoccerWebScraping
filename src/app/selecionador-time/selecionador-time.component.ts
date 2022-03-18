import { Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: 'app-selecionador-time',
  templateUrl: './selecionador-time.component.html',
  styleUrls: ['./selecionador-time.component.scss']
})

export class SelecionadorTimeComponent {

  private numTime = 1;

  public selecionarTime (img: string): void {

    this.alternaTime();

    var imgTemplate = `<img id="imgTime` + this.numTime + `" src="` + img + `" >`

    if(this.numTime == 2 && img == $('#imgTime1').attr('src')) {

      console.error("Os times não podem ser iguais");
      this.alternaTime();

    } else if ($('#imgTime' + this.numTime + '_div').find('img').length > 0) {

      console.error("Apenas 2 times são permitidos");


    } else {

      $('#imgTime' + this.numTime + '_div').append(imgTemplate);

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
