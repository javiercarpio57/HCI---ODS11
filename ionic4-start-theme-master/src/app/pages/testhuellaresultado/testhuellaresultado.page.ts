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
  calculoTierras = null;

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
      console.log(this.sumaPuntos);
    }
    else if(this.sumaPuntos >= 450){
      console.log(this.sumaPuntos)
    }
    else if(this.sumaPuntos >= 400){
      console.log(this.sumaPuntos)
    }
    else if(this.sumaPuntos >= 350){
      console.log(this.sumaPuntos)
    }
    else if(this.sumaPuntos >= 300){
      console.log(this.sumaPuntos)
    }
    else if(this.sumaPuntos >= 250){
      console.log(this.sumaPuntos)
    }
    else if(this.sumaPuntos >= 200){
      console.log(this.sumaPuntos)
    }
    else{
      console.log(this.sumaPuntos)
    }
  }
  goToMenuPrincipal() {
    this.navCtrl.navigateRoot('/bienvenida-test');
  }
}

