import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella5',
  templateUrl: './testhuella5.page.html',
  styleUrls: ['./testhuella5.page.scss'],
})
export class Testhuella5Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToNext6() {
    this.navCtrl.navigateRoot('/testhuella6');
  }
  goToBack4() {
    this.navCtrl.navigateRoot('/testhuella4');
  }
}
