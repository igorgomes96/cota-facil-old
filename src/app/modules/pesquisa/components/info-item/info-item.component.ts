import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
})
export class InfoItemComponent implements OnInit {

  @Input() item: Item;
  @Output() adiciona = new EventEmitter<Item>();
  @Output() remove = new EventEmitter<Item>();
  @Output() atualiza = new EventEmitter<Item>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      qtda: [0]
    });

    this.form.get('qtda').valueChanges
      .pipe(map((valor: string) => !valor ? 0 : valor), distinctUntilChanged())
      .subscribe(valor => {
        if (this.item.qtda && (!valor || valor === '0')) {
          this.item.qtda = 0;
          this.remove.emit(this.item);
        } else if (!this.item.qtda && valor) {
          this.item.qtda = +valor;
          this.adiciona.emit(this.item);
        } else if (this.item.qtda && valor) {
          this.item.qtda = +valor;
          this.atualiza.emit(this.item);
        }
      });
  }

  decrementa() {
    const valorAtual = this.form.get('qtda').value;
    if (!valorAtual || +valorAtual < 0) { return; }
    this.form.get('qtda').setValue(+valorAtual - 1);
  }

  incrementa() {
    const valorAtual = this.form.get('qtda').value;
    this.form.get('qtda').setValue(+valorAtual + 1);
  }


}
