import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testhuellaresultado',
  templateUrl: './testhuellaresultado.page.html',
  styleUrls: ['./testhuellaresultado.page.scss'],
})
export class TesthuellaresultadoPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goToMenuPrincipal() {
    this.navCtrl.navigateRoot('/bienvenida-test');
  }
}

