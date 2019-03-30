import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testhuella3',
  templateUrl: './testhuella3.page.html',
  styleUrls: ['./testhuella3.page.scss'],
})
export class Testhuella3Page implements OnInit {
  public lines: number;
  passedId1 = null;
  passedId2 = null;

  constructor(
    public navCtrl: NavController, private activateRoute: ActivatedRoute
  ) {
    this.lines = -1;
   }

  ngOnInit() {
    this.lines = -1;
    this.passedId1 = this.activateRoute.snapshot.paramMap.get('myid2');
    this.passedId2 = this.activateRoute.snapshot.paramMap.get('myid3');
  }

  pushPageBack(){
    this.navCtrl.navigateBack('/testhuella2/'+this.passedId1);
  }

  pushPage(){
    this.navCtrl.navigateForward('/testhuella4/'+this.passedId1+'/'+this.passedId2+'/'+this.lines);
  }

  actualizarResp3(): void{
    //console.log(this.lines);
  }

  goToNext4() {
    if(this.lines != -1){
      this.pushPage();
    }
    else{
    }
  }
  goToBack2() {
    this.pushPageBack();
  }
}
