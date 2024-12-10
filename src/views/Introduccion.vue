<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4 
      .col-lg-8.my-lg-0.my-3
        p La instalación de cableado estructurado es una práctica que combina aspectos técnicos avanzados y normas de seguridad específicas para crear sistemas de redes de alta calidad, durabilidad y eficiencia. Este tipo de cableado se utiliza principalmente en entornos empresariales y de servicios, donde se requiere un soporte confiable para el flujo de datos, la interconexión de dispositivos y la transmisión de información a gran velocidad. Dado su papel crítico en la infraestructura de comunicaciones, el cableado estructurado debe diseñarse y ejecutarse siguiendo estrictos estándares de instalación y normativas de cumplimiento que garanticen su correcto funcionamiento y capacidad para adaptarse a futuras expansiones.

        .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Un aspecto fundamental en la instalación de cableado estructurado es el conocimiento y la aplicación de la normativa vigente. Tanto los estándares internacionales como la normativa nacional, tales como el RETIE y el Código Eléctrico Colombiano, proporcionan un marco que regula cada etapa de la instalación, desde la selección de materiales hasta las pruebas finales de verificación. Además, las certificaciones y el cumplimiento normativo brindan confianza y respaldo a los usuarios, asegurando que los sistemas cumplen con criterios técnicos de calidad y seguridad, y que son capaces de soportar las demandas de una infraestructura de red moderna.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')   

    p La documentación técnica tiene un papel fundamental en el proceso de instalación de cableado estructurado. Planos detallados, especificaciones técnicas y protocolos de verificación permiten una instalación precisa y facilitan el mantenimiento del sistema a lo largo de su vida útil. Estos documentos garantizan que el sistema cumple con los estándares técnicos y que puede ser operado y ampliado de manera ordenada y eficiente, lo cual es vital en entornos donde la continuidad y la confiabilidad de la red son indispensables para las operaciones diarias.

    .row.justify-content-center.align-items-center.my-5
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Finalmente, la seguridad y las buenas prácticas en la instalación de cableado estructurado son imprescindibles para proteger tanto a los técnicos como a la infraestructura instalada. Esto implica la gestión de riesgos específicos del entorno de trabajo, la capacitación en el uso seguro de herramientas y equipos, y un control de calidad riguroso para verificar el cumplimiento de los estándares de rendimiento. En conjunto, estos elementos permiten una instalación segura y de calidad que, además de cumplir con la normativa, es capaz de sostener la evolución de las necesidades de conectividad y comunicación en el tiempo.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/4.png' alt='')                 


    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/v2L2_TjyIWQ?si=girmg7hs8tykZ8Ez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
