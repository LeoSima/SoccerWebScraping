import { Component } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: 'app-selecionador-time',
  templateUrl: './selecionador-time.component.html',
  styleUrls: ['./selecionador-time.component.scss']
})

export class SelecionadorTimeComponent {

  private alternadorTime = 1;

  selecionarTime (img: string) {
    var imgTemplate = `<img id="imgTime` + this.alternadorTime + `" src="` + img + `" >`

    $('#imgTime' + this.alternadorTime + '_div').append(imgTemplate);

    if (this.alternadorTime == 1){
      this.alternadorTime = 2;
    } else if (this.alternadorTime == 2) {
      this.alternadorTime = 1;
    }
  }

}
