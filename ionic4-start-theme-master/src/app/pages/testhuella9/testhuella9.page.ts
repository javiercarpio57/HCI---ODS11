import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella9',
  templateUrl: './testhuella9.page.html',
  styleUrls: ['./testhuella9.page.scss'],
})
export class Testhuella9Page implements OnInit {
  public lines:number;
  passedId1 = null;
  passedId2 = null;
  passedId3 = null;
  passedId4 = null;
  passedId5 = null;
  passedId6 = null;
  passedId7 = null;
  passedId8 = null;
  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute
  ) { 
    this.lines = -1;
  }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid29');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid30');
    this.passedId3 = this.activateRoute.snapshot.paramMap.get('myid31');
    this.passedId4 = this.activateRoute.snapshot.paramMap.get('myid32');
    this.passedId5 = this.activateRoute.snapshot.paramMap.get('myid33');
    this.passedId6 = this.activateRoute.snapshot.paramMap.get('myid34');
    this.passedId7 = this.activateRoute.snapshot.paramMap.get('myid35');
    this.passedId8 = this.activateRoute.snapshot.paramMap.get('myid36');
  }
  actualizarResp9(): void{
    console.log(this.lines);
  }
  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella8/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.passedId4+'/'+this.passedId5+'/'+this.passedId6+'/'+this.passedId7);
  }
  pushPage(){
    this.navCtrl.navigateForward('/testhuellaresultado/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.passedId4+'/'+this.passedId5+'/'+this.passedId6+'/'+this.passedId7+'/'+this.passedId8+'/'+this.lines);
  }
  goToResultado() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
    }
  }
  goToBack8() {
    this.pushPageBack();
  }
}
