import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { ImagePage } from './../modal/image/image.page';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Observable } from 'rxjs';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { stringify } from 'querystring';
import { element } from '@angular/core/src/render3';
import { userInfo } from 'os';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit{
  cualquierCosa: any[] = [];
  nombre: string = "";

  searchKey = '';
  themeCover = 'assets/img/Calc1.png';
  themeCover2 = 'assets/img/Bulb3.png';
  username = null;
  key : string = "";
  usuarios : Observable<Usuario[]>;
  user: Usuario[] = [];
  usuario : Usuario = {
    email : 'no papi',
    nombre : 'Paul Belches' ,
    cantidadDeTierras : 0,
    porcentajeAlimentacion : 0,
    porcentajeTransporte : 0,
    porcentajeEnergetico : 0,
    porcentajeContaminacion : 0,
    porcentajeAgua : 0,
    consumoTotal: 0,
    paneles: 0
  }

  constructor (
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private route: ActivatedRoute,
    private UsuarioService: UsuarioService,
    public global: GlobalService
  ) {
  }
  
  ngOnInit() {
    this.global.idDoc = "Hola, soy Javier";
    this.username = this.route.snapshot.paramMap.get('usuario');
    this.global.email = this.username;
    console.log(this.global.email);
    this.usuarios = this.UsuarioService.getUsers();

    this.UsuarioService.getUser("YEBnCdZyEhM87oxTuTDH").subscribe(
      element => {
        console.log(element.nombre.toString());
        //this.cualquierCosa.push(element.nombre);
        this.global.idDoc = element.nombre.toString()}
    )
    
    

    //console.log("getUser: " + a);
    console.log("User: " + this.usuarios);
    
    //console.log(this.usuario.email);
    this.usuarios.forEach(elment => {
      return elment.forEach( element =>{
        if (element.email == this.username){
          //console.log(element.id);
        }
      })
    });

    
    this.usuarios.subscribe(
      element => {
        console.log("Usuarios: " + element);
      }
    )
    //console.log(this.usuario);
    //this.usuario = this.usuarios[0].subscribe
   // for (var i = 0; i < this.usuarios.subscribe.length; i++){
    //  this.
    //}  
    this.printSome();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  goToEnergy() {
    this.navCtrl.navigateForward('/energy');
  }

  goToBienvenida() {
    this.navCtrl.navigateForward('/bienvenida-test');
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  printSome(){
    console.log("Nombre: " + this.global.idDoc);
  }
}
