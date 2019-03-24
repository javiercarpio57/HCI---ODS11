import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella6',
  templateUrl: './testhuella6.page.html',
  styleUrls: ['./testhuella6.page.scss'],
})
export class Testhuella6Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToNext7() {
    this.navCtrl.navigateRoot('/testhuella7');
  }
  goToBack5() {
    this.navCtrl.navigateRoot('/testhuella5');
  }
}
