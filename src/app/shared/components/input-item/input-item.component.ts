import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Chooser } from '@ionic-native/chooser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MensagensService } from 'src/app/core/services/mensagens.service';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss'],
})
export class InputItemComponent implements OnInit {

  @Output() adicionarTexto = new EventEmitter<string>();
  @Output() adicionarImagem = new EventEmitter<string>();
  @Output() adicionarArquivo = new EventEmitter<string>();

  texto: string;
  constructor(
    private camera: Camera,
    private mensagensService: MensagensService,
    private chooser: Chooser) { }

  ngOnInit() { }

  enviar(event: KeyboardEvent) {
    this.adicionarTexto.emit(this.texto);
    this.texto = '';
    if (event) {
      event.preventDefault();
    }
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.adicionarImagem.emit('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      this.mensagensService.toast(err);
    });
  }

  escolherArquivo() {
    this.chooser.getFile()
      .then(file => console.log(file ? file.name : 'canceled'))
      .catch((error: any) => console.error(error));
  }

}
