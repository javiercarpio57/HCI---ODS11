import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { GlobalService } from 'src/app/services/global.service';

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

  dates: any[] = [];
  earths: any[] = [];

  dates2: any[] = [];
  paneles: any[] = [];

  constructor(public global: GlobalService) {
    
    //this.dates.push("31/03/2019");
    //this.earths.push(5);

    // this.dates2.push("31/03/2019");
    //this.paneles.push(21);
   }

  ngOnInit() {
    console.log(this.global.idDoc);
    this.graphic();
    this.graphic2();
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
                max: 5,
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
