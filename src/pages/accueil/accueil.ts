import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApplicationPage } from '../../pages/application/application';
import { ProduitsPage } from '../../pages/produits/produits';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  isShow:boolean = false;
  apps:any = [
    {id : "5457", name : "Allo gaz", owner : "Amine El Mansouri", phone : "06 45 75 88 55", color : "primary"},
    {id : "4812", name : "Gaz en vrac", owner : "Ahmed El Moumen", phone : "06 78 95 24 51", color : "orange"},
    {id : "4512", name : "Oasis café", owner : "Said Miftah", phone : "06 48 54 86 52", color : "secondary"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  showHide(){
      this.isShow = this.isShow ? false : true;
  }

  showApp(app_id){
    this.navCtrl.push(ApplicationPage, {apps : this.apps, app_id: app_id});
  }

  gotoFidelite(){
    this.navCtrl.parent.select(3);
  }

  gotoProduits(){
    this.navCtrl.push(ProduitsPage);
  }

}
