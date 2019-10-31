import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

import { PesquisaInputComponent } from './components/pesquisa-input/pesquisa-input.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';
import { InputItemComponent } from './components/input-item/input-item.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    PesquisaInputComponent,
    ListaItemComponent,
    InputItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    PesquisaInputComponent,
    ListaItemComponent,
    InputItemComponent,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class SharedModule { }
