import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella8',
  templateUrl: './testhuella8.page.html',
  styleUrls: ['./testhuella8.page.scss'],
})
export class Testhuella8Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToNext9() {
    this.navCtrl.navigateRoot('/testhuella9');
  }
  goToBack7() {
    this.navCtrl.navigateRoot('/testhuella7');
  }
}

