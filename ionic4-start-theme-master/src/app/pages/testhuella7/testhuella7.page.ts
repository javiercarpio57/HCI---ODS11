import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella7',
  templateUrl: './testhuella7.page.html',
  styleUrls: ['./testhuella7.page.scss'],
})
export class Testhuella7Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToNext8() {
    this.navCtrl.navigateRoot('/testhuella8');
  }
  goToBack6() {
    this.navCtrl.navigateRoot('/testhuella6');
  }
}
