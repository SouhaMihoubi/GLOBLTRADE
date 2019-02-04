import { Component, OnInit } from '@angular/core';
import { CryptoAPIService } from '../crypto-api.service';
import {Crypto} from '../models/cryptoModele';
import { Chart } from 'chart.js';
import { ActivatedRoute,Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-marchee',
  templateUrl: './marchee.component.html',
  styleUrls: ['./marchee.component.css']
})
export class MarcheeComponent implements OnInit {
  chart = [];
  currentValue: string;
  datas;
  result;
  article;
  interval: any;
  constructor(public CryptoService: CryptoAPIService, 
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationEnd) {
        let id = this.route.snapshot.paramMap.get('id');
        this.getchart(id);
      }

  });
  }
  ngAfterViewInit(){
    
    this.interval = setInterval(() => { 
      this.refreshData(); 
  }, 10000);
  
   }
   refreshData(){
    let id = this.route.snapshot.paramMap.get('id');
  
  this.CryptoService.coinDetail(id).subscribe(res => {
    this.result=res.Data;
    console.log(this.result);
    
    })
  
   }

 getchart(id){
 
  
  this.CryptoService.coinChart(id).subscribe(res => {
        
    let price_max = res['Data'].map(res => res.hight);
    let price_min = res['Data'].map(res => res.low);
    let alldates = res['Data'].map(res => res.time);
 
    let Dates = []
    alldates.forEach((res) => {
        let jsdate = new Date(res*1000)
        Dates.push(jsdate.toDateString())
    })

this.chart = new Chart('canvas', {
type: 'line',
data: {
  labels: Dates,
  datasets: [
    { 
      data: price_max,
      borderColor: "#264B39",
      fill: true
    },
    { 
      data: price_min,
      borderColor: "#228B22",
      fill: true
    },
  ]
},
options: {
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: true
    }],
    yAxes: [{
      display: true
    }],
  }
}
});


  })

 }
   

  ngOnInit() {
   // this.getchart();
    this.refreshData();
    this.CryptoService.getArticle().subscribe(articles => {
      this.article=articles.Data;
      console.log(this.article);
  
});
  }
}
