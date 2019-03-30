import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella4',
  templateUrl: './testhuella4.page.html',
  styleUrls: ['./testhuella4.page.scss'],
})
export class Testhuella4Page implements OnInit {
  public lines: number;
  passedId1 = null;
  passedId2 = null;
  passedId3 = null;

  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute
  ) {
    this.lines = -1;
   }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid4');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid5');
    this.passedId3 = this.activateRoute.snapshot.paramMap.get('myid6');
  }
  actualizarResp4(): void{
    //console.log(this.lines);
  }
  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella3/'+this.passedId1+'/'+this.passedId2);
  }
  pushPage(){
    this.navCtrl.navigateForward('/testhuella5/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.lines);
  }
  goToNext5() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
    }
  }
  goToBack3() {
    this.pushPageBack();
  }
}