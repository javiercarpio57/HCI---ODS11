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
          handler: async () => {
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
      console.dir(err.message)
      const alert = await this.alertCtrl.create({
        header: '',
        subHeader: '',
        message: err.message,
        buttons: ['OK']
      });
      return await alert.present();
    }
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

  pushPage(){
    this.global.email = this.username;
    this.navCtrl.navigateForward('/home-results/' + this.username);
  }
}
