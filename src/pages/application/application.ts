import { Component, ViewChild  } from '@angular/core';
import { NavController, NavParams, PopoverController, Slides } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';
import { MescommandesPage } from '../../pages/mescommandes/mescommandes';
import { ProduitsPage } from '../../pages/produits/produits';
import { AssistancePage } from '../assistance/assistance';
// import { AssistancePage } from '../../pages/assistance/assistance';


@Component({
  selector: 'page-application',
  templateUrl: 'application.html',
})
export class ApplicationPage {

  @ViewChild('slider') private slider: Slides;

  apps:any = this.navParams.get('apps');
  app_id:any = this.navParams.get('app_id');
  app_index:any;
  app:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.app = this.apps.find(x => x.id === this.app_id);
    this.app_index = this.apps.indexOf(this.app);
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

  slideChanged(){
    let currentIndex = this.slider.getActiveIndex();
    if(currentIndex || currentIndex==0){
      this.app = this.apps[currentIndex];
    }
  }

  gotoMescommande() {
    this.navCtrl.push(MescommandesPage);
  }

  gotoProduits(){
    this.navCtrl.push(ProduitsPage);
  }

  gotoContact(){
    this.navCtrl.push(AssistancePage);
  }

  gotoAssistance(){
    this.navCtrl.parent.select(2);
    
  }
}
