import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioModule } from './modules/inicio/inicio.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PerfilModule } from './modules/perfil/perfil.module';
import { MinhaListaModule } from './modules/minha-lista/minha-lista.module';
import { TabsPageModule } from './modules/tabs/tabs.module';
import { ChatModule } from './modules/chat/chat.module';
import { ListasModule } from './modules/listas/listas.module';
import { AuthModule } from './modules/auth/auth.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsPageModule,
    InicioModule,
    CoreModule,
    SharedModule,
    ListasModule,
    PerfilModule,
    MinhaListaModule,
    ChatModule,
    AuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
