import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PesquisaInputComponent } from './pesquisa-input/pesquisa-input.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PesquisaInputComponent
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
    PesquisaInputComponent
  ]
})
export class SharedModule { }
