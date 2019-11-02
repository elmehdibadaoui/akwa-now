import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { ProduitPage } from '../produit/produit';
import { NotificationPage } from '../notifications/notifications';

@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html',
})
export class ProduitsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  show(index) {
    this.navCtrl.push(ProduitPage, {index: index});
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
