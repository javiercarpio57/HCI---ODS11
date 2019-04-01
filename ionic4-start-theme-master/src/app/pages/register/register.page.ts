import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController} from '@ionic/angular';
import {Usuario, UsuarioService} from './../../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  username: string = ""
  password: string = ""
  fullName: string = ""

  usuario : Usuario = {
    email : 'paulbelches@hotmail.com',
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

  userId = null;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    private usuarioService : UsuarioService,
    private route: ActivatedRoute
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async saveUser(){
    const loading = await this.loadingCtrl.create({
      message: 'Saving User'
    });
    await loading.present();

    if (this.userId){

    } else {
      this.usuarioService.addUser(this.usuario).then(() => {
        loading.dismiss();
      });
    }

  }

  ngOnInit() {

    this.userId = this.route.snapshot.params[''];
    

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

  pushPage(){
    this.navCtrl.navigateForward('/home-results/' + this.username);
  }


  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
  async register() {
    const {username, password, fullName} = this
    try {

      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      this.navCtrl.navigateRoot('/home-results/');
      console.log(res)
      this.usuario.email = username;
      this.usuario.nombre = fullName;
      this.saveUser();
      this.pushPage();

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
