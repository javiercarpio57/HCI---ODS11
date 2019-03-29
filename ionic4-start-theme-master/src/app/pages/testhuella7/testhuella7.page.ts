import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella7',
  templateUrl: './testhuella7.page.html',
  styleUrls: ['./testhuella7.page.scss'],
})
export class Testhuella7Page implements OnInit {
  public lines:number;
  constructor(
    public navCtrl: NavController
  ) {
    this.lines = 0;
   }

  ngOnInit() {
  }
  actualizarResp7(): void{
    console.log(this.lines+"1");
  }
  goToNext8() {
    this.navCtrl.navigateRoot('/testhuella8');
  }
  goToBack6() {
    this.navCtrl.navigateRoot('/testhuella6');
  }
}
