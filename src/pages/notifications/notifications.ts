import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    template: `
      <ion-list class="notifications-list">
        <ion-item>
            <img width="20" src="assets/imgs/afriquiagaz.png" item-start />
            <b>Commande</b><br>Suivez votre commande<br> N°5354
            <label item-end>il ya 6 min ></label>
        </ion-item>
        <ion-item>
            <img width="20" src="assets/imgs/afriquiagaz.png" item-start />
            <b>Commande</b><br>Suivez votre commande<br> N°5354
            <label item-end>il ya 10 min ></label>
        </ion-item>
      </ion-list>
    `
})

export class NotificationPage {
    constructor(public viewCtrl: ViewController){}

    close() {
        this.viewCtrl.dismiss();
    }
}