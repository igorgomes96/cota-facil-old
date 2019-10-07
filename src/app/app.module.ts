import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './modules/inicio/inicio.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PesquisaModule } from './modules/pesquisa/pesquisa.module';
import { OrcamentosModule } from './modules/orcamentos/orcamentos.module';
import { PerfilModule } from './modules/perfil/perfil.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    InicioModule,
    CoreModule,
    SharedModule,
    PesquisaModule,
    OrcamentosModule,
    PerfilModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
