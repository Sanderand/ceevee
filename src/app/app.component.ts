import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor () {}

  public ngOnInit (): void {}
}
