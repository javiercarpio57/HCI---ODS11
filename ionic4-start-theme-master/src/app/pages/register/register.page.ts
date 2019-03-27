import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController} from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  username: string = ""
  password: string = ""

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async signUp() {

    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home-results');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  async register() {
    const {username, password} = this
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      this.navCtrl.navigateRoot('/home-results');
      console.log(res)
    } catch(err) {
      const alert = await this.alertCtrl.create({
        header: '',
        subHeader: '',
        message: err.message,
        buttons: ['OK']
      });
      return await alert.present();
    }
  }
}
