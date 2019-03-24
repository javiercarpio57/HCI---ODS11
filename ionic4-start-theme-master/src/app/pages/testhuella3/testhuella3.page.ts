import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella3',
  templateUrl: './testhuella3.page.html',
  styleUrls: ['./testhuella3.page.scss'],
})
export class Testhuella3Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  // // //
  goToNext4() {
    this.navCtrl.navigateRoot('/testhuella4');
  }
  goToBack2() {
    this.navCtrl.navigateRoot('/testhuella2');
  }
}
