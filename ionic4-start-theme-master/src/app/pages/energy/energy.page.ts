import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, ModalController, NavController} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ImagePage } from './../modal/image/image.page';
import { DeviceValidator } from '../energy/deviceValidatos';
import { HourValidator } from '../energy/hourValidatos';
import { DayValidator } from '../energy/dayValidatos';


@Component({
  selector: 'app-energy',
  templateUrl: './energy.page.html',
  styleUrls: ['./energy.page.scss'],
})
export class EnergyPage implements OnInit {
  myForm: FormGroup;

  @ViewChild('slideWithNav') slideWithNav: IonSlides;
  
  slider: any;
  themeCover = 'assets/img/leftArrow.png';
  themeCover2 = 'assets/img/rightArrow.png';
  image = 'assets/img/e2.png';

  i1 = 'assets/img/transparent.png';
  i2 = 'assets/img/transparent.png';
  i3 = 'assets/img/transparent.png';
  i4 = 'assets/img/transparent.png';
  i5 = 'assets/img/transparent.png';
  i6 = 'assets/img/transparent.png';
  i7 = 'assets/img/transparent.png';
  i8 = 'assets/img/transparent.png';
  i9 = 'assets/img/transparent.png';
  i10 = 'assets/img/transparent.png';
  i11 = 'assets/img/transparent.png';
  i12 = 'assets/img/transparent.png';

  contador = 0;
  lista = [];
  arreglo = [];

  slide = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true
  };

  slide2 = {
    initialSlide: 1,
    slidesPerView: 1,
    loop: true
  };

  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder, public navCtrl: NavController) { 
    this.myForm = this.createMyForm();

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

  printSome(some: string){
    console.log("Holaaa " + some);
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

    this.slideWithNav.getActiveIndex().then(index => {
      
      if(index > 7){
        index = (index % 7);
      }
      console.log(index);
      this.image = 'assets/img/e' + (index) + '.png'
   });
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

  saveData(){
    //console.log(this.myForm.value);
    this.contador = this.contador + 1;
    console.log(this.contador);

    this.arreglo = [[this.myForm.value.cantidad, this.myForm.value.horas, this.myForm.value.dias, this.image]];
    this.lista = this.lista.concat(this.arreglo);

    if(this.contador == 1){
      this.i1 = this.lista[this.contador - 1][3];
    }else if(this.contador == 2){
      this.i2 = this.lista[this.contador - 1][3];
    }else if(this.contador == 3){
      this.i3 = this.lista[this.contador - 1][3];
    }else if(this.contador == 4){
      this.i4 = this.lista[this.contador - 1][3];
    }else if(this.contador == 5){
      this.i5 = this.lista[this.contador - 1][3];
    }else if(this.contador == 6){
      this.i6 = this.lista[this.contador - 1][3];
    }else if(this.contador == 7){
      this.i7 = this.lista[this.contador - 1][3];
    }else if(this.contador == 8){
      this.i8 = this.lista[this.contador - 1][3];
    }else if(this.contador == 9){
      this.i9 = this.lista[this.contador - 1][3];
    }else if(this.contador == 10){
      this.i10 = this.lista[this.contador - 1][3];
    }else if(this.contador == 11){
      this.i11 = this.lista[this.contador - 1][3];
    }else if(this.contador == 12){
      this.i12 = this.lista[this.contador - 1][3];
    }else{
      this.contador = this.contador - 1;
    }

  }

  private createMyForm(){
    return this.formBuilder.group({
      cantidad: ['', DeviceValidator.isValid],
      horas: ['', HourValidator.isValid],
      dias: ['', DayValidator.isValid]
    });
  }
}
