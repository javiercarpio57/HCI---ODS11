import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-testhuella2',
  templateUrl: './testhuella2.page.html',
  styleUrls: ['./testhuella2.page.scss'],
})
export class Testhuella2Page implements OnInit {
  public lines: number;
  constructor(
    public navCtrl: NavController, public alertCtrl: AlertController
  ) { 
    this.lines = 0;
  }

  ngOnInit() {
  }

  actualizarResp2(): void{
    console.log(this.lines+"1");
  }
  // // //
  goToNext3() {
    this.navCtrl.navigateRoot('/testhuella3');
  }
  goToBack1() {
    this.navCtrl.navigateRoot('/testhuella1');
  }
}