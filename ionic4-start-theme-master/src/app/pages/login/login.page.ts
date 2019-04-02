import * as firebase from 'firebase';

import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { persona, PersonasService } from '../../services/persona.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  
  personas : Observable<persona[]>;
  username: string = ""
  password: string = ""
  mensaje: string = ""

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    private global: GlobalService,
    private PersonasService: PersonasService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.global.email = null;
    this.global.idDoc = null;
    this.global.nombre = null;
  }

  ionViewWillLeave(){
    this.personas = this.PersonasService.getpersonas();
  }

  ionViewDidLeave(){
    console.log("Nomrbe es " + this.global.nombre);
    this.personas.subscribe(
      element => {
        element.forEach(elment => {
          if(elment.email == this.global.email){
            this.saveName(elment.nombre.toString());
            console.log(this.global.email);
          }
        })
      }
    )
  console.log("Nomrbe es " + this.global.nombre);
  }

  saveName(nombre: string){
    this.global.nombre = nombre;
    console.log("Nombre guardado");
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  
  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          //cssClass: 'secondary',
          handler: () => {
            ;
          }
        }, {
          text: 'Confirm',
          handler: async data => {
            this.resetPassword(data.email);
            //const loader = await this.loadingCtrl.create({
            //  duration: 2000
            //});
           
            //loader.present();
            //loader.onWillDismiss().then(async l => {
            //  const toast = await this.toastCtrl.create({
            //    showCloseButton: true,
            //    message: 'Email was sended successfully.',
            //    duration: 3000,
            //    position: 'bottom'
            // });

            //  toast.present();
            //});
          }
        }
      ]
    });

    await alert.present();
}

  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }

  async login() {
    const {username, password} = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
      console.log(res)
      this.navCtrl.navigateRoot('/home-results/');
      this.pushPage();
    } catch(err) {
      console.log(err);
      this.showError(err);
    }
  }

  async resetPassword(email: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Enviando restauración...'
    });
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => loading.dismiss())
      .catch((error) => this.showError(error)) 
  }
  pushPage(){
    this.global.email = this.username;
    this.navCtrl.navigateForward('/home-results/' + this.username);

  }

  async showError(error){
    if (error.code == "auth/invalid-email"){
      console.log("1");
      this.mensaje = "El correo no cuenta con el formato adecuado.";
    }
    if (error.code == "auth/wrong-password"){
      console.log("2")
      this.mensaje = "La contraseña es inválido o el usuario no existe.";
    }
    if (error.code == "auth/user-not-found"){
      console.log("3")
      this.mensaje = "Usuario no encontrado.";
    }
    if (error.code == "auth/weak-password"){
      console.log("2")
      this.mensaje = "La direccion de correo ya es usada en otra cuenta..";
    }
    if (error.code == "auth/email-already-in-use"){
      console.log("3")
      this.mensaje = "La contraseña deberia de tener al menos 6 caracteres.";
    }

    const alert = await this.alertCtrl.create({
      header: '',
      subHeader: '',
      message: this.mensaje,
      buttons: ['OK']
    });
    return await alert.present();
    
  }

}
