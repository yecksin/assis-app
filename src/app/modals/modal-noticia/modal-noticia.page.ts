import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-modal-noticia',
  templateUrl: './modal-noticia.page.html',
  styleUrls: ['./modal-noticia.page.scss'],
})
export class ModalNoticiaPage implements OnInit {
  noticia:any;
  constructor(
    public _noticias: NoticiasService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.noticia = this._noticias.noticiaActual;
  }
  salir(){
    this.modalController.dismiss();
    console.log("Close");
  }

}
