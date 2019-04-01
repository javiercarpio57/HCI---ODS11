import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { persona, PersonasService } from 'src/app/services/persona.service';
import { Observable } from 'rxjs';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  personas : Observable<persona[]>;
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
    private route: ActivatedRoute,
    private global: GlobalService,
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.global.email = null;
    this.global.idDoc = null;
    this.global.nombre = null;
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

  ionViewWillLeave(){
    this.personas = this.personaService.getpersonas();
  }
  
  ionViewDidLeave(){
  
    console.log("Nomrbe es " + this.global.nombre);
    this.personas.subscribe(
      element => {
        element.forEach(elment => {
          if(elment.email == this.global.email){
            this.saveName(elment.nombre.toString());
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
    this.global.email = this.username;
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
