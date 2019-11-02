import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { NotificationPage } from '../notifications/notifications';

@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html',
})
export class AssistancePage {

  @ViewChild("msg") msg: any;

  d: Date = new Date();

  messages:any=[
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    console.log(this.d.getMinutes());
    let minute = this.d.getMinutes();
    let hour = this.d.getHours();

    this.messages.push(
      {avatar: "assets/imgs/iconRobot.png", message: "Bienvenue a Rashid.",time: hour + ":" + minute,isBoot: true},
    {avatar: "assets/imgs/iconRobot.png", message: "Salut invité , je suis là pour vous aider avec AlloGaz. Comment puis-je vous aider?",time: hour + ":" + minute,isBoot: true},
    );
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

  send(){
    let minute = this.d.getMinutes();
    let hour = this.d.getHours();
    this.messages.push(
      {avatar: "assets/imgs/avatarMan.png", message: this.msg.value,time: hour + ":" + minute,isBoot: false},
    );

    setTimeout(() => {

      let robotMsg = this.msg.value;
      if(  this.msg.value.toLowerCase() == "salut"){
        robotMsg = "Bonjour,"
      }else{
        robotMsg = "Je suis désolé j'ai rien compris,"        
      }

      let minute = this.d.getMinutes();
      let hour = this.d.getHours();

      this.messages.push(
        {avatar: "assets/imgs/iconRobot.png", message: robotMsg,time: hour + ":" + minute,isBoot: true},
      );
    }, 300);
    console.log(this.msg.value);
  }

}
