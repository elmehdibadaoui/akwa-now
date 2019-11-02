import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';

@Component({
  selector: 'page-mescommandes',
  templateUrl: 'mescommandes.html',
})
export class MescommandesPage {

  isFav:boolean = false;

  commandes:any = [
    {id: 1,image: "assets/imgs/afriquiagaz.png",title: "Afriquia Gaz", adress: "Brahim roudani 244", etat: "En attente", quantity: 1, favori: false},
    {id: 2,image: "assets/imgs/afriquiagaz.png",title: "Afriquia Gaz", adress: "Brahim roudani 244", etat: "En cours", quantity: 4, favori: true},
    {id: 3,image: "assets/imgs/tissir.png",title: "Tissir", adress: "Brahim roudani 510", etat: "Livrée", quantity: 2, favori: false},
    {id: 4,image: "assets/imgs/tissir.png",title: "Tissir", adress: "Brahim roudani 510", etat: "En attente", quantity: 20, favori: false},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  showCmd() {
    this.isFav = false;

    let fav = document.getElementsByClassName('btn-favs') as HTMLCollectionOf<HTMLElement>;
    if (fav.length != 0) {
      fav[0].classList.add("active");
    }

    let cmd = document.getElementsByClassName('btn-cmds') as HTMLCollectionOf<HTMLElement>;
    if (cmd.length != 0) {
      cmd[0].classList.remove("active");
    }
  }

  showFav(){
    this.isFav = true;
    
    let fav = document.getElementsByClassName('btn-favs') as HTMLCollectionOf<HTMLElement>;
    if (fav.length != 0) {
      fav[0].classList.remove("active");
    }

    let cmd = document.getElementsByClassName('btn-cmds') as HTMLCollectionOf<HTMLElement>;
    if (cmd.length != 0) {
      cmd[0].classList.add("active");
    }
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

  setFav(id){
    let index = this.commandes.indexOf(this.commandes.find(x => x.id === id));
    this.commandes[index].favori = this.commandes[index].favori ? false : true;
  }

  removeCmd(id){
    let index = this.commandes.indexOf(this.commandes.find(x => x.id === id));
    this.commandes.splice(index, 1);    
  }

}
