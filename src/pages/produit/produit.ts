import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, PopoverController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';

@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {

  @ViewChild(Slides) slides: Slides;

  index:any = this.navParams.get('index');

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

}
