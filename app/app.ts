import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Produtos } from './pages/produtos/produtos';
import { NovoProduto } from './pages/novoProduto/novoProduto';
import {BirthdayService} from './services/birthday.service';

@Component({
  templateUrl: 'build/app.html',
  providers: [BirthdayService]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Produtos;

  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Produtos', component: Produtos },
      { title: 'Novo Produto', component: NovoProduto }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
