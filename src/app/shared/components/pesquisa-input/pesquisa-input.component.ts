import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisa-input',
  templateUrl: './pesquisa-input.component.html',
  styleUrls: ['./pesquisa-input.component.scss'],
})
export class PesquisaInputComponent implements OnInit {

  @Output() pesquisar = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pesquisa: []
    });

    this.form.get('pesquisa').valueChanges
      .pipe(
        map((texto: string) => texto.trim()),
        distinctUntilChanged(),
        debounceTime(300)
      ).subscribe(texto => this.pesquisar.emit(texto));
  }

  ngOnInit() {

  }

}
