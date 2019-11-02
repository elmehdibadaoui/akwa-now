import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

import { NotificationPage } from '../notifications/notifications';


@Component({
  selector: 'page-statistique',
  templateUrl: 'statistique.html'
})
export class StatistiquePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  gotoHome() {
    this.navCtrl.parent.goToRoot();
  }

  notifications(myEvent) {
    let popover = this.popoverCtrl.create(NotificationPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {

    HighCharts.chart("bar", {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });

    
    HighCharts.chart('areaspline', {
      chart: {
          type: 'areaspline'
      },
      title: {
          text: ''
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          verticalAlign: 'top',
          x: 150,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          plotBands: [{ // visualize the weekend
              from: 4.5,
              to: 6.5,
              color: 'rgba(68, 170, 213, .2)'
          }]
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      tooltip: {
          shared: true,
          valueSuffix: ' units'
      },
      credits: {
          enabled: false
      },
      plotOptions: {
          areaspline: {
              fillOpacity: 0.5
          }
      },
      series: [{
          name: 'John',
          data: [3, 4, 3, 5, 4, 10, 12]
      }, {
          name: 'Jane',
          data: [1, 3, 4, 3, 3, 5, 4]
      }]
    });

    
    HighCharts.chart('column', {
      chart: {
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 15,
              beta: 15,
              viewDistance: 25,
              depth: 40
          }
      },

      title: {
          text: 'Total fruit consumption, grouped by gender'
      },

      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },

      yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
              text: 'Number of fruits',
              skew3d: true
          }
      },

      tooltip: {
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      },

      plotOptions: {
          column: {
              stacking: 'normal',
              depth: 40
          }
      },

      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2],
          stack: 'male'
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5],
          stack: 'male'
      }, {
          name: 'Jane',
          data: [2, 5, 6, 2, 1],
          stack: 'female'
      }, {
          name: 'Janet',
          data: [3, 0, 4, 4, 3],
          stack: 'female'
      }]
    });



  }


}