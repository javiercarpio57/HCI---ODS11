import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuellaresultado',
  templateUrl: './testhuellaresultado.page.html',
  styleUrls: ['./testhuellaresultado.page.scss'],
})
export class TesthuellaresultadoPage implements OnInit {
  passedId1 = null;
  passedId2 = null;
  passedId3 = null;
  passedId4 = null;
  passedId5 = null;
  passedId6 = null;
  passedId7 = null;
  passedId8 = null;
  passedId9 = null;
  sumaPuntos = null;
  sumaParcial = null;
  public calculoTierras = null;
  public alimentacion = null;
  public transporte = null;
  public energetico = null;
  public contaminacion = null;
  public agua = null;
  public alimentacionPorcentaje = null;
  public transportePorcentaje = null;
  public energeticoPorcentaje = null;
  public contaminacionPorcentaje = null;
  public aguaPorcentaje = null;
  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid37');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid38');
    this.passedId3 = this.activateRoute.snapshot.paramMap.get('myid39');
    this.passedId4 = this.activateRoute.snapshot.paramMap.get('myid40');
    this.passedId5 = this.activateRoute.snapshot.paramMap.get('myid41');
    this.passedId6 = this.activateRoute.snapshot.paramMap.get('myid42');
    this.passedId7 = this.activateRoute.snapshot.paramMap.get('myid43');
    this.passedId8 = this.activateRoute.snapshot.paramMap.get('myid44');
    this.passedId9 = this.activateRoute.snapshot.paramMap.get('myid45');
    
    //Aqui hare el calculo de tierras necesarias segun los resultados del test
    this.sumaPuntos = parseFloat(this.passedId1) + parseFloat(this.passedId2) + parseFloat(this.passedId3) + parseFloat(this.passedId4) + parseFloat(this.passedId5) + parseFloat(this.passedId6) + parseFloat(this.passedId7) + parseFloat(this.passedId8) + parseFloat(this.passedId9);
    if(this.sumaPuntos >= 500){
      this.calculoTierras = '5 Planetas Tierra'
    }
    else if(this.sumaPuntos >= 450){
      this.calculoTierras =  '4 Planetas Tierra';
    }
    else if(this.sumaPuntos >= 400){
      this.calculoTierras = '3.5 Planetas Tierra';

    }
    else if(this.sumaPuntos >= 350){
      this.calculoTierras = '3 Planetas Tierra';
    }
    else if(this.sumaPuntos >= 300){
      this.calculoTierras = '2.5 Planetas Tierra';
    }
    else if(this.sumaPuntos >= 250){
      this.calculoTierras = '2 Planetas Tierra';
    }
    else if(this.sumaPuntos >= 200){
      this.calculoTierras = '1.5 Planetas Tierra';
    }
    else{
      this.calculoTierras = '1 Planeta Tierra';
    }

    //Aqui hare el calculo de los porcentajes en que contribuye cada actividad para la huella de carbono obtenida
    //Alimenticia
    this.sumaParcial = parseFloat(this.passedId1) + parseFloat(this.passedId2);
    this.alimentacion = this.sumaParcial/this.sumaPuntos;
    this.alimentacionPorcentaje = (this.alimentacion * 100).toFixed(0).toString();
    this.alimentacion = (this.alimentacion).toFixed(2).toString();

    //Transporte
    this.sumaParcial = parseFloat(this.passedId3);
    this.transporte = this.sumaParcial/this.sumaPuntos;
    this.transportePorcentaje = (this.transporte * 100).toFixed(0).toString();
    this.transporte = (this.transporte).toFixed(2).toString();

    //Gasto Energetico
    this.sumaParcial = parseFloat(this.passedId5) + parseFloat(this.passedId6);
    this.energetico = this.sumaParcial/this.sumaPuntos;
    this.energeticoPorcentaje = (this.energetico * 100).toFixed(0).toString();
    this.energetico = (this.energetico).toFixed(2).toString();

    //Contaminacion
    this.sumaParcial = parseFloat(this.passedId4) + parseFloat(this.passedId7);
    this.contaminacion = this.sumaParcial/this.sumaPuntos;
    this.contaminacionPorcentaje = (this.contaminacion * 100).toFixed(0).toString();
    this.contaminacion = (this.contaminacion).toFixed(2).toString();

    //Agua
    this.sumaParcial = parseFloat(this.passedId8) + parseFloat(this.passedId9);
    this.agua = this.sumaParcial/this.sumaPuntos;
    this.aguaPorcentaje = (this.agua * 100).toFixed(0).toString();
    this.agua = (this.agua).toFixed(2).toString();
  }

  goToMenuPrincipal() {
    this.navCtrl.navigateBack('/bienvenida-test');
  }
}

