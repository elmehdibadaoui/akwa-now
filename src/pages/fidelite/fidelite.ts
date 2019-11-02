import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';

@Component({
  selector: 'page-fidelite',
  templateUrl: 'fidelite.html',
})
export class FidelitePage {

  toDisplay:String = "all";

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

  display(element){
    this.toDisplay = element;
  }

}
