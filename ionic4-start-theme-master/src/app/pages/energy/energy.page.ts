import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';

import { ImagePage } from './../modal/image/image.page';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.page.html',
  styleUrls: ['./energy.page.scss'],
})
export class EnergyPage implements OnInit {

  @ViewChild('slideWithNav') slideWithNav: IonSlides;
  
  slider: any;
  themeCover = 'assets/img/leftArrow.png';
  themeCover2 = 'assets/img/rightArrow.png';

  slide = {
    initialSlide: 0,
    slidesPerView: 3,
    loop: true
  };

  constructor(public modalCtrl: ModalController) { 

    this.slider = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: 'assets/img/e1.png'
        },
        {
          id: 2,
          image: 'assets/img/e2.png'
        },
        {
          id: 3,
          image: 'assets/img/e3.png'
        },
        {
          id: 4,
          image: 'assets/img/e4.png'
        },
        {
          id: 5,
          image: 'assets/img/e5.png'
        },
        {
          id: 6,
          image: 'assets/img/e6.png'
        },
        {
          id: 7,
          image: 'assets/img/e7.png'
        }
      ]
    };
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  slideNext(object, slideView){
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slidePrev(object, slideView){
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  slideDidChange(object, slideView){
    this.checkIfNavDisabled(object, slideView);
  }

  checkIfNavDisabled(object, slideView){
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView){
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView){
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  ngOnInit() {
  }

}
