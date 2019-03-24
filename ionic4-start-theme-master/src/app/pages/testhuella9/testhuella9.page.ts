import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella9',
  templateUrl: './testhuella9.page.html',
  styleUrls: ['./testhuella9.page.scss'],
})
export class Testhuella9Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToResultado() {
    this.navCtrl.navigateRoot('/testhuellaresultado');
  }
  goToBack8() {
    this.navCtrl.navigateRoot('/testhuella8');
  }
}
