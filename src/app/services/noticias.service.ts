import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticiaActual:any;
  constructor() { }
  noticias=[
    {
      seccion:"Salud",
      icon:"medkit-outline",
      noticias:[
        {
          categoria:"virus",
          titulo: "Hay una esperanza real de poner fin a la pandemia con los avances en las vacunas COVID-19",
          descripcion:"Con las últimas noticias positivas de los ensayos de las vacunas, la luz al final de este túnel largo y oscuro se vuelve más brillante', dijo el director de la Organización Mundial de la Salud este lunes, cuando se dieron a conocer los resultados preliminares positivos de una tercera vacuna candidata contra el COVID-19. La inmunización desarrollada por la Universidad de Oxford y la farmacéutica AstraZeneca tendría hasta un 90% de efectividad, según los datos de un primer análisis de ensayos clínicos en el Reino Unido y Brasil. Dos vacunas más, de las compañías Pfizer y Moderna, también han demostrado una efectividad similar. 'No se puede subestimar la importancia de este logro científico. Ninguna vacuna en la historia se ha desarrollado tan rápidamente como estas. La comunidad científica ha establecido un nuevo estándar para el desarrollo. Ahora hay una esperanza real de que las vacunas, en combinación con otras medidas de salud pública probadas y comprobadas, ayudarán a poner fin a la pandemia COVID-19', afirmó Tedros Adhanom Gebreyesus durante su conferencia de prensa bisemanal. La científica jefa de la Organización, la doctora Soumya Swaminathan, dijo que se encontraban “muy alentados” por los resultados preliminares de Oxford y Astrazeneca, al igual que por los de las dos vacunas anteriores, pero que esta última tenía una especial ventaja logística al no requerir de una cadena de ultra frío. 'La ventaja de esta vacuna es que puede ser guardada en refrigeradores ordinarios de 2 a 8 grados centígrados y mantenerse estable. Esto tiene una gran cantidad de ventajas logísticas para transportar y entregar esta vacuna a ciudades, y lugares rurales en todo el mundo, y esperamos tener más vacunas de este tipo', explicó.",
          descripcionCorta:"Una tercera vacuna candidata contra el nuevo coronavirus, la de Oxford y AstraZeneca, reveló resultados preliminares prometedores de la fase tres de sus ensayos clínicos. La inmunización, a diferencia de la Moderna y Pfizer, no requiere de una ultra cadena de frío, y sería mucho más fácil de distribuir logísticamente. Los expertos de la agencia de salud de la ONU advirtieron que existe un riesgo real de que los más pobres sean pisoteados en la estampida por las vacunas. ",
          imagen:"https://www.esic.edu/sites/default/files/rethink/2dd51396-salud-digital.jpg",
          chips:[
            {
              titulo:"#FinAlCovid"
            },            {
              titulo:"#covid-19"
            },
            {
              titulo:"#VacunaContraElCovid"
            }
          ]
        },
        {
          categoria:"Chequeo",
          titulo: "La importancia de un chequeo medico",
          descripcion:"Se estima que un 20% de las personas que se someten a una revisión de su estado de salud, de forma preventiva, logran identificar que padecen alguna enfermedad o que tienen algún riesgo que amerita un cambio en su estilo de vida para prevenir el desarrollo de una enfermedad o sus complicaciones. La diabetes, la hipertensión y los trastornos lipídicos (triglicéridos y colesterol alto) suelen ser los problemas que se descubren con mayor frecuencia durante un chequeo médico preventivo, en especial porque pueden cursar sin ningún síntoma, precisa el doctor Juan Carlos Hernández, coordinador del Servicio de Urgencias de la Clínica del Occidente. La prevención es la base de los programas de chequeo médico, y como afirman especialistas de la Fundación Cardiovascular – Hospital Internacional de Colombia, la idea es ir más allá e identificar factores de riesgo y diagnosticar diferentes enfermedades en etapa temprana donde pueden ser tratables o incluso curables. 'A través de la realización periódica de chequeos médicos ejecutivos (recomendable 1 vez por año), nos anticipamos al problema en lugar de descubrir la enfermedad en una etapa avanzada donde es poco lo que se puede hacer'. Con esa información, lejos de asustarse o de ignorar los resultados, lo que se busca es que los pacientes tomen conciencia y a partir de esa realidad que tienen en sus manos, modificar sus hábitos de vida incorrectos y seguir las recomendaciones personalizadas hechas a su medida por su bienestar y salud. Entonces, este es un chequeo ciento por ciento preventivo, y dice el doctor Juan Carlos Hernández, especialista de la Clínica del Occidente, se puede considerar ‘aliado’ de las enfermedades silenciosas como la hipertensión, que no ha sido diagnosticada en casi la mitad de las personas porque no saben que la padecen y no hay síntomas que les den una señal. En este caso específico, hay que recordar que 'detectar a tiempo la hipertensión arterial permite evitar que se desencadene un infarto o un evento cerebral. El gran error de los pacientes radica en no consultar a su médico ni hacerse exámenes de rutina, porque no sienten molestias'. ",
          descripcionCorta:"Un buen examen preventivo permite asegurarse de que se encuentra bien o, por el contrario, identificar factores de riesgo y enfermedades crónicas como diabetes, tensión alta o colesterol elevado.",
          imagen:"https://img.freepik.com/vector-gratis/grupo-personal-medico-que-lleva-iconos-relacionados-salud_53876-43071.jpg?size=626&ext=jpg",
          chips:[
            {
              titulo:"#ChequeoMedico"
            },            {
              titulo:"#DiagnosticoTemprano"
            },
            {
              titulo:"#SaludEsVivir"
            }
          ]
        }
      ]
    },
    {
      seccion:"Deportes",
      icon:"american-football",
      noticias:[
        {
          categoria:"actividad deportiva",
          titulo: "Regresará las actividades deportivas en la universidad el proximo año",
          descripcion:"Se estan comezando a renudar las actividades deportivas juveniles en los ultimos meses, teniendo en cuenta normativas y sugerencia brindada por las organizaciones deportiva, ",
          descripcionCorta:"Se estan tomando las medidas necesarias y las labores preventivas para que los estudientes puedan relizar las actividades deportiva",
          imagen:"https://miro.medium.com/max/1080/1*GiJdaRllHLnznSHT9kENQw.png",
          chips:[
            {
              titulo:"#ElDeporteEsVida"
            },            {
              titulo:"#SiSePuede"
            }
          ]
        },
        {
          categoria:"virus",
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
      seccion:"Arte",
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
