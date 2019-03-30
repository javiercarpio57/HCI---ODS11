import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella6',
  templateUrl: './testhuella6.page.html',
  styleUrls: ['./testhuella6.page.scss'],
})
export class Testhuella6Page implements OnInit {
  public lines: number;
  passedId1 = null;
  passedId2 = null;
  passedId3 = null;
  passedId4 = null;
  passedId5 = null;
  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute
  ) { 
    this.lines = -1;
  }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid11');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid12');
    this.passedId3 = this.activateRoute.snapshot.paramMap.get('myid13');
    this.passedId4 = this.activateRoute.snapshot.paramMap.get('myid14');
    this.passedId5 = this.activateRoute.snapshot.paramMap.get('myid15');
  }
  actualizarResp6(): void{
    console.log(this.lines);
  }
  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella5/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.passedId4);
  }
  pushPage(){
    this.navCtrl.navigateForward('/testhuella7/'+this.passedId1+'/'+this.passedId2+'/'+this.passedId3+'/'+this.passedId4+'/'+this.passedId5+'/'+this.lines);
  }
  goToNext7() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
    }
  }
  goToBack5() {
    this.pushPageBack();
  }
}
