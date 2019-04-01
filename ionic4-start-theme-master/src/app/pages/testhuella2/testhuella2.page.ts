import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella2',
  templateUrl: './testhuella2.page.html',
  styleUrls: ['./testhuella2.page.scss'],
})
export class Testhuella2Page implements OnInit {
  public lines: number;
  passedId1 = null;
  idDoc = 0;

  constructor(
    public navCtrl: NavController, public alertCtrl: AlertController,
    private activateRoute: ActivatedRoute
  ) { 
    this.lines = -1;
  }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid');
  }

  actualizarResp2(): void{
    //console.log(this.lines);
  }

  async alertaSeleccion(){
    const alert = await this.alertCtrl.create({
      header: 'Seleccion de Respuesta',
      message: 'Debe de seleccionar una respuesta para poder continuar con el test.',
      buttons: ['OK']
    });
    return await alert.present();
  }

  pushPage(){
    this.navCtrl.navigateForward('/testhuella3/'  +this.passedId1+'/'+this.lines);
  }
  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella1');
  }  
  goToNext3() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
      this.alertaSeleccion();
    }
  }
  goToBack1() {
    this.pushPageBack();
  }
}