import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController,LoadingController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { calculadora, CalculadoraEnergeticaService } from 'src/app/services/calculadora-energetica.service';

@Component({
  selector: 'app-calculate-enery',
  templateUrl: './calculate-enery.page.html',
  styleUrls: ['./calculate-enery.page.scss'],
})
export class CalculateEneryPage implements OnInit {

  datos = null;
  potenciaE = null;
  cantPanel = null;
  fecha: Date = new Date();

  calculadora : calculadora = {
    email : ' ',
    consumoTotal: 0,
    paneles: 0,
    fecha: ''
  }
  
  constructor(private route: ActivatedRoute, 
    public navCtrl: NavController, 
    public global: GlobalService,
    public loadingCtrl: LoadingController,
    private CalculadoraEnergeticaService: CalculadoraEnergeticaService) { }

  ngOnInit() {
    this.datos = this.route.snapshot.paramMap.get('myLista');
    this.datos = parseFloat(this.datos)/1000;
    this.datos = this.datos.toFixed(2)
    this.potenciaElectrica();
    this.cantPaneles();
    console.log("Calculo: " + this.datos);
    console.log("Este es mi correo: " + this.global.email);

    this.calculadora.email = this.global.email;
    this.calculadora.consumoTotal = this.potenciaE;
    this.calculadora.paneles = this.cantPanel;
    this.calculadora.fecha = this.fecha.getDate() + '/' + this.fecha.getMonth() + '/' +this.fecha.getFullYear() + ' ' + this.fecha.getHours() + ':' +this.fecha.getMinutes() + ':' +this.fecha.getSeconds(); 
    this.saveCalculator();
  }

  async saveCalculator(){

    const loading = await this.loadingCtrl.create({
      message: 'Guardando datos...'
    });
    await loading.present();
    this.CalculadoraEnergeticaService.addcalculadora(this.calculadora).then(() => {
      loading.dismiss();
    });
  }

  potenciaElectrica(){
    this.potenciaE = parseFloat(this.datos) * 1200 / 5;
    this.potenciaE = parseFloat(this.potenciaE).toFixed(2);
  }

  cantPaneles(){
    this.cantPanel = parseFloat(this.potenciaE)/265;
    this.cantPanel = parseFloat(this.cantPanel).toFixed(2);
  }

  goToMenu() {
    this.navCtrl.navigateForward('/home-results');
  }

}
