import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./style/app.contDiscussoes.scss','./style/app.contTitulo.scss','./style/app.contVideo.scss','./style/app.contHeader.scss','./style/app.contCard.scss','./style/app.contCreateTopic.scss','./style/app.contNewTopic.scss']
})
export class AppComponent {
  title = 'DevChuva';

  showText: boolean = false;
  btnShow: boolean = true;
  point: boolean = true;
  btnShowLess: boolean = false;
  createTopic: boolean = false;
  form: boolean = false;
  newTopic: boolean = true;
  cardNew: boolean = false;
  newTopicCreated: boolean = false;
  comments: boolean = false;
  pointComments: boolean = true;

  showMore(): void {
    this.showText = true;
    this.btnShow = false;
    this.point = false;
    this.btnShowLess = true;
  }

  showLess(): void {
    this.showText = false;
    this.btnShowLess = false;
    this.btnShow = true;
    this.point = true;
  }

  criarTopico(): void {
    this.createTopic = true;
    this.newTopic = false;
    this.form = true;
  }

  enviarForm(): void{
    this.cardNew = true;
    this.newTopicCreated = true;
    this.createTopic = false;
  }

  showAnswers(): void {
    this.comments = true;
    this.pointComments = false;
  }
}
