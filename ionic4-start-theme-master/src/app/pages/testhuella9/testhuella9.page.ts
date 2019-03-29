import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella9',
  templateUrl: './testhuella9.page.html',
  styleUrls: ['./testhuella9.page.scss'],
})
export class Testhuella9Page implements OnInit {
  public lines:number;
  constructor(
    public navCtrl: NavController
  ) { 
    this.lines = 0;
  }

  ngOnInit() {
  }
  actualizarResp9(): void{
    console.log(this.lines+"1");
  }
  goToResultado() {
    this.navCtrl.navigateRoot('/testhuellaresultado');
  }
  goToBack8() {
    this.navCtrl.navigateRoot('/testhuella8');
  }
}
