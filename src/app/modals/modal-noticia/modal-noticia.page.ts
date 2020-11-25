import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-modal-noticia',
  templateUrl: './modal-noticia.page.html',
  styleUrls: ['./modal-noticia.page.scss'],
})
export class ModalNoticiaPage implements OnInit {
  noticia:any;
  constructor(
    public _noticias: NoticiasService
  ) { }

  ngOnInit() {
    this.noticia = this._noticias.noticiaActual;
  }

}
