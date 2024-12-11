<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de instalación

    .row.justify-content-center.align-items-center
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 La instalación de un sistema de cableado estructurado requiere de un conocimiento integral de los diferentes tipos de cables, herramientas específicas, materiales necesarios, y los procedimientos correctos para llevar a cabo una instalación de calidad y conforme a la normativa. Este apartado cubre desde la selección de componentes hasta la aplicación de prácticas que garantizan una instalación segura y efectiva. Lectura de datos desde archivos externos.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/16.png' alt='')  
      
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Tipos de cableado y categorías

    p.mb-5 En el cableado estructurado, existen diferentes tipos de cables y categorías, cada uno diseñado para satisfacer distintos requisitos de rendimiento y aplicaciones específicas en redes de datos y telecomunicaciones. Conocer las características de cada tipo para poder seleccionar el más adecuado según las necesidades del sistema y cumplir con los estándares de rendimiento.

    .row.justify-content-center.mb-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='')      
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
          div(titulo="Cable de par trenzado (UTP, FTP, STP)")
            p Es el más común en instalaciones de cableado estructurado, especialmente para redes locales. Dentro de esta categoría, se encuentran los cables: 
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span UTP (par trenzado no blindado). 
              li 
                i.fas.fa-check-circle.color1
                span FTP (par trenzado con blindaje de lámina).
              li 
                i.fas.fa-check-circle.color1
                span STP (par trenzado con blindaje total).
            p El blindaje ayuda a reducir las interferencias electromagnéticas (EMI), haciéndolos adecuados para entornos donde estas interferencias puedan afectar el rendimiento.  
          div(titulo="Cables de fibra óptica")
            p Ofrecen un mayor ancho de banda y distancias de transmisión superiores a los cables de cobre, por lo que son ideales para conexiones de larga distancia y aplicaciones de alta velocidad, como redes de datos y enlaces entre edificios. Los cables de fibra óptica se dividen en:
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span #[b Monomodo] (para transmisiones a larga distancia).
              li 
                i.fas.fa-check-circle.color1
                span #[b Multimodo] (para distancias más cortas, común en redes locales).              

          div(titulo="Categorías de cableado (Cat5e, Cat6, Cat6a, Cat7, Cat8)")
            p Las categorías de los cables de par trenzado definen su capacidad de transmisión y son un factor preponderante en la selección de los componentes para el sistema. Cada categoría está diseñada para soportar diferentes anchos de banda y frecuencias. Por ejemplo:
            ul.lista-ul.fa-ul.ps-4
              li 
                i.fas.fa-check-circle.color1
                span Cat5e es adecuado para transmisiones de hasta 1 Gbps.
              li 
                i.fas.fa-check-circle.color1
                span Cat6a y categorías superiores soportan hasta 10 Gbps. 
              p Comprender los diferentes tipos y categorías de cables permite a los técnicos seleccionar los componentes adecuados según el alcance de la instalación y las necesidades de rendimiento específicas de la red.   


    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Herramientas y materiales  
    .row.justify-content-center.align-items-center
      .col
        p.mb-0 El proceso de instalación de cableado estructurado requiere herramientas especializadas y materiales de calidad que permitan un trabajo preciso, seguro y conforme a las normas técnicas. La correcta selección de herramientas y materiales es fundamental para evitar fallas en la instalación y garantizar la durabilidad del sistema.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/18.png' alt='')   

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1. 
          span Herramientas y descripción

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Herramienta
                th Funcionalidad
                th Ventaja

            tbody
              tr
                td.fast-bold.bgt1 Herramientas de corte y terminación.
                td Para la instalación de cableado de par trenzado y fibra óptica, es necesario contar con herramientas de corte específicas, como tijeras de precisión y peladoras de cables, que aseguran cortes limpios y precisos.
                td Las herramientas de terminación, como las crimpeadoras, se emplean para realizar terminaciones adecuadas en conectores RJ45 y garantizar un contacto óptimo.
              tr
                td.fast-bold.bgt1 Herramientas de medición y verificación.
                td Para comprobar que las conexiones cumplen con los estándares de rendimiento, se utilizan herramientas como los #[i testers] de cables y los certificadores.
                td Estas herramientas permiten verificar parámetros como la continuidad, la resistencia y el ancho de banda de los cables, asegurando que cumplen con las especificaciones.
              tr
                td.fast-bold.bgt1 Materiales de soporte e instalación.
                td Incluyen canaletas, abrazaderas, paneles de conexión (#[i patch panels]) y organizadores de cables, los cuales facilitan la gestión del cableado en el lugar de instalación.
                td El uso de estos materiales permite un sistema más organizado y reduce el riesgo de daño o interferencias en los cables.                                  

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Procedimientos de instalación

    p El proceso de instalación de cableado estructurado incluye una serie de procedimientos que deben ser ejecutados de manera precisa y ordenada para cumplir con las normativas y garantizar la funcionalidad y seguridad del sistema. Estos procedimientos cubren desde la planificación hasta la implementación física y la verificación final. 

    .row.bg5.align-items-center.mb-5
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Planificación y diseño del cableado: 
                p La instalación comienza con una fase de planificación en la que se consideran las necesidades del cliente, la distribución del espacio, y la ubicación de los dispositivos de red y telecomunicaciones. Durante esta etapa, se elabora un plan que define la disposición del cableado, los puntos de conexión, y las rutas de instalación. Es importante tomar en cuenta la estructura del edificio y posibles obstáculos, como paredes o columnas.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')  

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Instalación de los cables y componentes: 
                p Este procedimiento implica el tendido de los cables, la instalación de canaletas o tuberías para proteger el cableado, y la conexión de los componentes, como paneles de conexión, tomas de red y puntos de acceso. Se deben seguir las prácticas recomendadas para evitar curvas cerradas y tensiones en los cables, lo cual podría afectar su rendimiento.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')  

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Conexión y etiquetado: 
                p Cada conexión debe realizarse de acuerdo con las normas de color y terminación especificadas en los estándares (como TIA/EIA), y es fundamental etiquetar correctamente los puntos de conexión para facilitar la identificación y el mantenimiento futuro.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/22.png', alt='')  

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Pruebas de certificación y verificación: 
                p Una vez completada la instalación, es necesario realizar pruebas para verificar que el sistema cumple con los estándares de rendimiento. Las pruebas de certificación incluyen la verificación de continuidad, resistencia y diafonía (#[i crosstalk]) en los cables de cobre, así como pruebas de ancho de banda en las instalaciones de fibra óptica. Solo después de que el sistema pasa todas las pruebas de certificación, se considera lista para ser puesta en operación.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/23.png', alt='')                                                  

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/24.png' alt='')
          .col.pt-lg-0.pt-md-4.j1
            p.mb-0 Implementar procedimientos de instalación bien estructurados asegura que el cableado estructurado tenga un rendimiento óptimo, sea seguro y permita una fácil ampliación o modificación en el futuro.

</template>

<script>
import SlyderA from '../bootstrap/SlyderA'
export default {
  name: 'Tema2',
  components: { SlyderA },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
