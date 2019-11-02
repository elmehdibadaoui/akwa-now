import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';
import * as $ from 'jquery'

@Component({
  selector: 'page-commande',
  templateUrl: 'commande.html',
})
export class CommandePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
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

  myDate: String = new Date().toISOString();
  myDate1: String = new Date().toISOString();
  myDate2: String = new Date().toISOString();

  ionViewDidLoad() {
    $(document).ready(function () {
      
        

    });
  }

}
