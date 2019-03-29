import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella5',
  templateUrl: './testhuella5.page.html',
  styleUrls: ['./testhuella5.page.scss'],
})
export class Testhuella5Page implements OnInit {
  public lines: number;
  constructor(
    public navCtrl: NavController
  ) {
    this.lines = 0;
   }

  ngOnInit() {
  }
  actualizarResp5(): void{
    console.log(this.lines+"1");
  }
  goToNext6() {
    this.navCtrl.navigateRoot('/testhuella6');
  }
  goToBack4() {
    this.navCtrl.navigateRoot('/testhuella4');
  }
}
