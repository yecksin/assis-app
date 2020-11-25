import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNoticias'
})
export class FilterNoticiasPipe implements PipeTransform {

  transform(arreglo: any[], texto:String): any[]  {
    if(texto === ""){
      return arreglo
    }

    texto = texto.toLocaleLowerCase();
    return arreglo.filter(item=>{
   
      return item.categoria.includes(texto)
    })
   
  }

}
