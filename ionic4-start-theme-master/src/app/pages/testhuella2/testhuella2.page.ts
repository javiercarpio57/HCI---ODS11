import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella2',
  templateUrl: './testhuella2.page.html',
  styleUrls: ['./testhuella2.page.scss'],
})
export class Testhuella2Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  // // //
  goToNext3() {
    this.navCtrl.navigateRoot('/testhuella3');
  }
  goToBack1() {
    this.navCtrl.navigateRoot('/testhuella1');
  }
}