import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { persona, PersonasService } from 'src/app/services/persona.service';


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

  persona : persona = {
    email : 'paulbelches@hotmail.com',
    nombre : 'Paul Belches' ,
  }

  userId = null;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    private personaService: PersonasService,
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
      this.personaService.addpersona(this.persona).then(() => {
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
      this.persona.email = username;
      this.persona.nombre = fullName;
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
