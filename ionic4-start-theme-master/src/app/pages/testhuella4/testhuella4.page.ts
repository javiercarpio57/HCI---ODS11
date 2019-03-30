import { Component, OnInit } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella4',
  templateUrl: './testhuella4.page.html',
  styleUrls: ['./testhuella4.page.scss'],
})
export class Testhuella4Page implements OnInit {
  public lines: number;
  passedId1 = null;
  passedId2 = null;
  passedId3 = null;

  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute,
    public alertCtrl: AlertController
  ) {
    this.lines = -1;
   }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid4');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid5');
    this.passedId3 = this.activateRoute.snapshot.paramMap.get('myid6');
  }
  actualizarResp4(): void{
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
  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella3/'+this.passedId1+'/'+this.passedId2);
  }
  pushPage(){
    this.navCtrl.navigateForward('/testhuella5/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.lines);
  }
  goToNext5() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
      this.alertaSeleccion();
    }
  }
  goToBack3() {
    this.pushPageBack();
  }
}