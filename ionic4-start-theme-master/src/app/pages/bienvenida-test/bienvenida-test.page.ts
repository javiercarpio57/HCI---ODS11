import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida-test',
  templateUrl: './bienvenida-test.page.html',
  styleUrls: ['./bienvenida-test.page.scss'],
})
export class BienvenidaTestPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  slideDidLoad(slides: IonSlides){
    slides.startAutoplay();
  }
  
  goToNext1() {
    this.navCtrl.navigateRoot('/testhuella1');
  }
  goToMenu() {
    this.navCtrl.navigateRoot('/home-results');
  }
}