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
}
