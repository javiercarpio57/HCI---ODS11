import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella3',
  templateUrl: './testhuella3.page.html',
  styleUrls: ['./testhuella3.page.scss'],
})
export class Testhuella3Page implements OnInit {
  public lines: number;
  constructor(
    public navCtrl: NavController
  ) {
    this.lines = 0;
   }

  ngOnInit() {
  }

  actualizarResp3(): void{
    console.log(this.lines+"1");
  }

  // // //
  goToNext4() {
    this.navCtrl.navigateRoot('/testhuella4');
  }
  goToBack2() {
    this.navCtrl.navigateRoot('/testhuella2');
  }
}
