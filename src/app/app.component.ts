import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Lista } from './shared/models/lista';
import { ListaService } from './core/services/lista.service';
import { Router, NavigationEnd, ActivationStart } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  lista: Lista;
  exibeBotaoMinhaLista = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private listaService: ListaService,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.listaService.listaAtualizada().subscribe(lista => this.lista = lista);

    this.router.events.pipe(
      filter(event => event instanceof ActivationStart),
      distinctUntilChanged()
    ).subscribe((event: ActivationStart) => {
      if (event.snapshot.data.hasOwnProperty('exibeBotaoMinhaLista')) {
        this.exibeBotaoMinhaLista = event.snapshot.data.exibeBotaoMinhaLista;
      }
    });

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   distinctUntilChanged()
    // ).subscribe(_ => {
    //   if (!this.showLeftNav) {
    //     $('#page-wrapper').css('margin-left', '0px');
    //     $('body').addClass('top-navigation');
    //   } else {
    //     $('#page-wrapper').css('margin-left', '');
    //     $('body').removeClass('top-navigation');
    //   }
    // });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
