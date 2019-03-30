import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { PassThrough } from 'stream';
import { LineToLineMappedSource } from 'webpack-sources';

@Component({
  selector: 'app-testhuella1',
  templateUrl: './testhuella1.page.html',
  styleUrls: ['./testhuella1.page.scss'],
})
export class Testhuella1Page implements OnInit {
  public lines: number;
  constructor(
    public navCtrl: NavController, public alertCtrl: AlertController
  ) { 
    this.lines = -1;
  }

  ngOnInit() {
    this.lines = -1;
  }

  actualizarResp1(): void{
    console.log(this.lines);
  }
  
  pushPage(){
    this.navCtrl.navigateForward('/testhuella2/'+this.lines);
  }

  goToNext2() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
    }
  }
  goToBack() {
    this.navCtrl.navigateRoot('/bienvenida-test');
  }
}