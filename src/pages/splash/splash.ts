import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { AssistancePage } from '../assistance/assistance';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  logo:String = "assets/imgs/AppIconAkwa.png";

  login:boolean = false;
 
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public splashScreen: SplashScreen) {
  }
 
  ionViewDidEnter() {
 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.login = true;
      this.logo = "assets/imgs/logoWhite.png";
    }, 4000);

    this.navCtrl.push(AssistancePage);

  }

  showMenu(){
    this.viewCtrl.dismiss();
  }
 
}