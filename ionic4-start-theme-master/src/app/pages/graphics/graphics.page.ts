import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { GlobalService } from '../../services/global.service';
import { persona, PersonasService } from '../../services/persona.service';
import { calculadora, CalculadoraEnergeticaService } from 'src/app/services/calculadora-energetica.service';
import { Observable } from 'rxjs';
import { element } from '@angular/core/src/render3';
import { Huella, HuellaCarbonoService } from 'src/app/services/huella-carbono.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.page.html',
  styleUrls: ['./graphics.page.scss'],
})
export class GraphicsPage implements OnInit {

  @ViewChild('earth') earth;
  lineChart: any;

  @ViewChild('panel') panel;
  lineChart2: any;

  calculadora : Observable<calculadora[]>;
  test: Observable<Huella[]>;
  
  dates: any[] = [];
  earths: any[] = [];

  dates2: any[] = [];
  paneles: any[] = [];

  constructor(public global: GlobalService, 
    private PersonasService: PersonasService,
    private CalculadoraEnergeticaService: CalculadoraEnergeticaService,
    private HuellaCarbonoService: HuellaCarbonoService) {
    
    //this.dates.push("31/03/2019");
    //this.earths.push(5);

    // this.dates2.push("31/03/2019");
    //this.paneles.push(21);
   }

  ngOnInit() {
    console.log(this.global.idDoc);
    //this.graphic();
    //this.graphic2();
  }

  ionViewWillEnter(){

    this.test = this.HuellaCarbonoService.getHuellas();

    this.test.forEach(element => {
      element.forEach(elment => {
        if(elment.email == this.global.email){
          this.saveData2(elment.fecha, elment.cantidadDeTierras);
        }
      })
    })
    
    this.calculadora = this.CalculadoraEnergeticaService.getcalculadoras();
    console.log("Acabo de entrar " + this.calculadora + " " + this.global.email);

    this.calculadora.forEach(element => {
      element.forEach(elment => {
        if(elment.email == this.global.email){
          this.saveData(elment.fecha, elment.paneles);
        }
      })
    })

  }

  saveData(fecha: string, panel: number){
    this.dates2.push(fecha);
    this.paneles.push(panel);
    console.log("hola");
  }

  saveData2(fecha: string, tierra: number){
    this.dates.push(fecha);
    this.earths.push(tierra);
    console.log("hola");
  }

  ionViewDidEnter(){
    console.log("Holaaaaaaaaaaaa " + this.dates2.length);
    var a;
    
    for(a = 0; a < this.dates2.length; a++){
      console.log("Fecha: " + this.dates2[a] + " Panel: " + this.paneles[a]);
    }

    this.graphic();
    this.graphic2();
  }

  ionViewDidLeave(){
    this.calculadora = null;
    console.log("Acabo de salir" + this.calculadora);
  }
  
  private graphic(){
    this.lineChart = new Chart(this.earth.nativeElement, {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [
          {
            label: "Cantidad de planetas Tierra",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgb(0, 0, 0)",
            pointBorderWidth: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.earths,
          }
        ]
      },
      options:{
        scales: {
          yAxes: [{
            display: true,
            ticks: {
                suggestedMax: 5,
                min: 0,
                stepSize: 1
            }
          }]
        }
      }
    });
  }

  private graphic2(){
    this.lineChart2 = new Chart(this.panel.nativeElement, {
      type: 'line',
      data: {
        labels: this.dates2,
        datasets: [
          {
            label: "Cantidad de páneles solares",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgb(0, 0, 0)",
            pointBorderWidth: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.paneles,
          }
        ]
      },
      options:{
        scales: {
          yAxes: [{
            display: true,
            ticks: {
                suggestedMax: 20,
                min: 0,
                stepSize: 2
            }
          }]
        }
      }
    });
  }
}
