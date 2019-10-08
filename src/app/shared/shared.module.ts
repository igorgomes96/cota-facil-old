import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { PesquisaInputComponent } from './components/pesquisa-input/pesquisa-input.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { ListaItemComponent } from './components/lista-item/lista-item.component';

@NgModule({
  declarations: [
    PesquisaInputComponent,
    InfoItemComponent,
    ListaItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
    PesquisaInputComponent,
    InfoItemComponent,
    ListaItemComponent
  ]
})
export class SharedModule { }
