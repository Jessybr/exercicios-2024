import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';

  showText: boolean = false;
  btnShow: boolean = true;
  point: boolean = true;
  btnShowLess: boolean = false;
  createTopic: boolean = false;
  newTopic: boolean = true;
  cardNew: boolean = false;
  newTopicCreated: boolean = false;

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
  }

  enviarForm(): void{
    this.cardNew = true;
    this.newTopicCreated = true;
    this.createTopic = false;
  }
}
