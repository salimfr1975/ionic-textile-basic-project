import { Component } from '@angular/core';
import { OnInit } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public isMenuEnabled:boolean=false;
  constructor() {}
}
