import { Component } from '@angular/core';

import { StatistiquePage } from '../statistique/statistique';
import { AssistancePage } from '../assistance/assistance';
import { AccueilPage } from '../accueil/accueil';
import { FidelitePage } from '../fidelite/fidelite';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = StatistiquePage;
  tab3Root = AssistancePage;
  tab4Root = FidelitePage;
  tab5Root = AboutPage;

  constructor() {

  }
}
