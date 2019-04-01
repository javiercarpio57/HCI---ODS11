import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-calculate-enery',
  templateUrl: './calculate-enery.page.html',
  styleUrls: ['./calculate-enery.page.scss'],
})
export class CalculateEneryPage implements OnInit {

  datos = null;
  potenciaE = null;
  cantPanel = null;

  constructor(private route: ActivatedRoute, public navCtrl: NavController, public global: GlobalService) { }

  ngOnInit() {
    this.datos = this.route.snapshot.paramMap.get('myLista');
    this.datos = parseFloat(this.datos)/1000;
    this.datos = this.datos.toFixed(2)
    this.potenciaElectrica();
    this.cantPaneles();
    console.log("Calculo: " + this.datos);
    console.log(this.global.idDoc);
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
