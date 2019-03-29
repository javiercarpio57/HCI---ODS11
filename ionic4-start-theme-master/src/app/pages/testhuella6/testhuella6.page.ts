import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella6',
  templateUrl: './testhuella6.page.html',
  styleUrls: ['./testhuella6.page.scss'],
})
export class Testhuella6Page implements OnInit {
  public lines: number;
  constructor(
    public navCtrl: NavController
  ) { 
    this.lines = 0;
  }

  ngOnInit() {
  }
  actualizarResp6(): void{
    console.log(this.lines+"1");
  }
  goToNext7() {
    this.navCtrl.navigateRoot('/testhuella7');
  }
  goToBack5() {
    this.navCtrl.navigateRoot('/testhuella5');
  }
}
