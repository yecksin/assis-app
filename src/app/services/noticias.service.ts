import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticiaActual:any;
  constructor() { }
  noticias=[
    {
      categoria:"Salud",
      icon:"medkit-outline",
      noticias:[
        {
          titulo: "1",
          descripcion:"1",
          descripcionCorta:"1",
          imagen:"https://www.esic.edu/sites/default/files/rethink/2dd51396-salud-digital.jpg",
          chips:[
            {
              titulo:"nada"
            },            {
              titulo:"nada"
            },
            {
              titulo:"nada"
            }
          ]
        },
        {
          titulo: "2",
          descripcion:"2",
          descripcionCorta:"2",
          imagen:"https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg?size=626&ext=jpg",
          chips:[
            {
              titulo:"nada"
            }
          ]
        }
      ]
    },
    {
      categoria:"Deportes",
      icon:"american-football",
      noticias:[
        {
          titulo: "1",
          descripcion:"1",
          descripcionCorta:"1",
          imagen:"https://miro.medium.com/max/1080/1*GiJdaRllHLnznSHT9kENQw.png",
          chips:[
            {
              titulo:"nada"
            }
          ]
        },
        {
          titulo: "2",
          descripcion:"2",
          descripcionCorta:"2",
          imagen:"https://www.fundacioncanal.com/canaleduca/wp-content/uploads/2016/05/4_16_reportaje-850x423.jpg",
          chips:[
            {
              titulo:"nada"
            }
          ]
        }
      ]
    },
    {
      categoria:"Arte",
      icon:"color-palette",
      noticias:[
        {
          titulo: "1",
          descripcion:"1",
          descripcionCorta:"1",
          imagen:"https://cdn.pixabay.com/photo/2013/03/23/23/10/brush-96240_960_720.jpg",
          chips:[
            {
              titulo:"nada"
            }
          ]
        },
        {
          titulo: "2",
          descripcion:"2",
          descripcionCorta:"2",
          imagen:"https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_960_720.jpg",
          chips:[
            {
              titulo:"nada"
            }
          ]
        }
      ]
    }
  ]
  
  getNotocias(){

  }

  verNoticia(noticia){
    console.log(noticia);
    this.noticiaActual=noticia;
  }
}
