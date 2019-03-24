import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella1',
  templateUrl: './testhuella1.page.html',
  styleUrls: ['./testhuella1.page.scss'],
})
export class Testhuella1Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  // // //
  goToNext2() {
    this.navCtrl.navigateRoot('/testhuella2');
  }
  goToBack() {
    this.navCtrl.navigateRoot('/bienvenida-test');
  }
}