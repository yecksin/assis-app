import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { ModalController } from '@ionic/angular';
import { ModalNoticiaPage } from '../modals/modal-noticia/modal-noticia.page';

interface SectionsI {
  header: {
    title: string
  }
  body: {
    img: string
    content: string
    imgSize?: number
    contentSize?: number
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  textoFiltro="";
  sectionsConfig = {
    imgSize: 3,
    contentSize: 9
  }

  sections: Array<SectionsI> = [
    {
      header: {
        title: "Noticias"
      },
      body: {
        img: "https://picsum.photos/200/300?random=1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
        imgSize: 3,
        contentSize: 9,
      }
    },
    {
      header: {
        title: "Salud"
      },
      body: {
        img: "https://picsum.photos/200/300?random=2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, earum cumque laudantium accusantium fugiat saepe cupiditate perspiciatis commodi quod tempore illo doloribus mollitia et veniam debitis sequi accusamus vitae! Laudantium.",
      }
    }
  ]

  constructor(
    public _noticias:NoticiasService,
    public modalController: ModalController
    ) { 

  }

  ngOnInit() {
    console.log(this._noticias.noticias);
  }

  setTextFilter(e){
    console.log(e.detail.value);
    this.textoFiltro = e.detail.value;
  }

  async abrirModalNoticia(noticia) {
    this._noticias.verNoticia(noticia);
    const modal = await this.modalController.create({
      component: ModalNoticiaPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
