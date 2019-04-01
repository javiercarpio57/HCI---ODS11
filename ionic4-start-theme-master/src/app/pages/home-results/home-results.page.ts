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
import { persona, PersonasService } from '../../services/persona.service';
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
  cualquierCosa: string = "";
  nombre: string = "";

  personas : Observable<persona[]>;

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
    public global: GlobalService,
    private PersonasService: PersonasService
  ) {
  }
  
  ngOnInit() {
    this.global.idDoc = "Hola, soy Javier";
    this.username = this.route.snapshot.paramMap.get('usuario');

    if(this.global.email != null){
      
    }else{
      this.global.email = this.username;
    }
    
    console.log(this.global.email);
    this.usuarios = this.UsuarioService.getUsers();
    this.personas = this.PersonasService.getpersonas();
    this.getId();
  }

  getId(){
    this.usuarios.subscribe(
      element => {
        element.forEach(elment => {
          if(elment.email == this.username){
            //console.log("asdfhasdf " + elment.id);
            //this.cualquierCosa = elment.id;
            this.saveID(elment.id);
            this.getUser();
          }
        });
      }
    )
    console.log("Termine ID");
  }

  getUser(){
    console.log("mmmmm " + this.global.idDoc.toString());
    this.UsuarioService.getUser(this.global.idDoc.toString()).subscribe(
      element => {
        this.saveData(element.email, element.nombre.toString(), element.cantidadDeTierras,
          element.porcentajeAgua, element.porcentajeTransporte, element.porcentajeEnergetico,
          element.porcentajeContaminacion, element.porcentajeAgua, 
          element.consumoTotal, element.paneles);
        this.printSome();
      }
    )
    console.log("Termine user");
    //this.printSome();
  }

  printSome(){
    console.log(this.usuario.nombre);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);

  }

  ionViewDidEnter(){
    
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

  saveID(id: string){
    this.global.idDoc = id;
    //this.getUser();
  }

  saveData(email: string, nombre: string, cantTierra: number, porAl: number,
    porTran: number, porEner: number, porCont: number, porAg: number,
    conT: number, panel: number){
    
      this.usuario.email = email;
      this.usuario.nombre = nombre;
      this.usuario.cantidadDeTierras = cantTierra;
      this.usuario.porcentajeAlimentacion = porAl;
      this.usuario.porcentajeTransporte = porTran;
      this.usuario.porcentajeEnergetico = porEner;
      this.usuario.porcentajeContaminacion = porCont;
      this.usuario.porcentajeAgua = porAg;
      this.usuario.consumoTotal = conT;
      this.usuario.paneles = panel;
      console.log("Ya termine");
  }
}
