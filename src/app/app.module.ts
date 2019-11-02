import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatistiquePage } from '../pages/statistique/statistique';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from '../pages/splash/splash';
import { AccueilPage } from '../pages/accueil/accueil';
import { FidelitePage } from '../pages/fidelite/fidelite';
import { ApplicationPage } from '../pages/application/application';
import { AssistancePage } from '../pages/assistance/assistance';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { ProduitsPage } from '../pages/produits/produits';
import { ProduitPage } from '../pages/produit/produit';
import { NotificationPage } from '../pages/notifications/notifications';
import { MescommandesPage } from '../pages/mescommandes/mescommandes';
import { CommandePage } from '../pages/commande/commande';
import { MapPage } from '../pages/map/map';



@NgModule({
  declarations: [
    MyApp,
    StatistiquePage,
    HomePage,
    TabsPage,
    SplashPage,
    AccueilPage,
    FidelitePage,
    ApplicationPage,
    AssistancePage,
    ContactPage,
    AboutPage,
    ProduitsPage,
    ProduitPage,
    NotificationPage,
    MescommandesPage,
    CommandePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StatistiquePage,
    HomePage,
    TabsPage,
    SplashPage,
    AccueilPage,
    FidelitePage,
    ApplicationPage,
    AssistancePage,
    ContactPage,
    AboutPage,
    ProduitsPage,
    ProduitPage,
    NotificationPage,
    MescommandesPage,
    CommandePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
