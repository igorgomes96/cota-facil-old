import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Lista } from './shared/models/lista';
import { MinhaListaService } from './core/services/minha-lista.service';
import { Router, ActivationStart } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  lista: Lista;
  header = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private listaService: MinhaListaService,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.listaService.minhaLista().subscribe(lista => this.lista = lista);

    this.router.events.pipe(
      filter(event => event instanceof ActivationStart),
      distinctUntilChanged()
    ).subscribe((event: ActivationStart) => {
      if (event.snapshot.data.hasOwnProperty('header')) {
        this.header = event.snapshot.data.header;
      } else {
        this.header = '';
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
