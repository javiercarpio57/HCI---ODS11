import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuella8',
  templateUrl: './testhuella8.page.html',
  styleUrls: ['./testhuella8.page.scss'],
})
export class Testhuella8Page implements OnInit {  
  public lines: number;
  constructor(
    public navCtrl: NavController
  ) { 
    this.lines = 0;
  }

  ngOnInit() {
  }
  actualizarResp8(): void{
    console.log(this.lines+"1");
  }
  goToNext9() {
    this.navCtrl.navigateRoot('/testhuella9');
  }
  goToBack7() {
    this.navCtrl.navigateRoot('/testhuella7');
  }
}

