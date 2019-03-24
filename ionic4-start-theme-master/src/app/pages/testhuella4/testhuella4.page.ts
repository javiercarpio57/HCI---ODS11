import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella4',
  templateUrl: './testhuella4.page.html',
  styleUrls: ['./testhuella4.page.scss'],
})
export class Testhuella4Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToNext5() {
    this.navCtrl.navigateRoot('/testhuella5');
  }
  goToBack3() {
    this.navCtrl.navigateRoot('/testhuella3');
  }
}