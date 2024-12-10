<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo del cableado estructurado
      
    .row.justify-content-center.align-items-center
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/5.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 El marco normativo del cableado estructurado es fundamental para garantizar la calidad, seguridad y compatibilidad en las instalaciones de redes. El conocimiento y la correcta aplicación de estos estándares permite que los sistemas de cableado sean seguros, eficientes y cumplan con las regulaciones locales e internacionales. Este apartado se centra en proporcionar a los estudiantes una comprensión profunda de los requisitos normativos y de certificación que rigen la instalación de redes de cableado estructurado.
      .col-lg-auto.pt-lg-0.pt-md-4
        img.img-a.img-t(src='@/assets/curso/temas/6.png' alt='')      

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Estándares Internacionales

    p Los estándares internacionales representan un conjunto de guías y especificaciones creadas para asegurar la interoperabilidad, eficiencia y seguridad en los sistemas de cableado estructurado. Dentro de estos estándares destacan:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="ISO/IEC 11801")
        h4 ISO/IEC 11801
        p Esta norma, desarrollada por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC), define los requisitos para los sistemas de cableado estructurado, incluyendo parámetros de rendimiento para instalaciones de datos y telecomunicaciones. 

      .tarjeta.color-acento-botones--borde.p-4(titulo="TIA/EIA 568")
        h4 TIA/EIA 568
        p Publicado por la Asociación de la Industria de las Telecomunicaciones (TIA), el estándar TIA/EIA 568 establece criterios de desempeño para el cableado de telecomunicaciones en edificios comerciales. Su objetivo principal es proporcionar directrices que aseguren una infraestructura de telecomunicaciones uniforme y de alta calidad. 

      .tarjeta.color-acento-botones--borde.p-4(titulo="ANSI/BICSI 002")
        h4 ANSI/BICSI 002
        p Este estándar, desarrollado por el Instituto de la Industria de Comunicaciones y Tecnologías de la Información (BICSI), ofrece guías para el diseño y la implementación de sistemas de cableado estructurado en centros de datos. Aborda temas como la organización física de cables y los procedimientos de instalación segura y ordenada. 

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.bg1.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Comprender estos estándares ayuda para que el profesional pueda implementar soluciones de cableado estructurado que cumplan con las normativas internacionales, asegurando un rendimiento óptimo y la capacidad de crecimiento futuro de las instalaciones.      
            
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Normativa nacional

    p Además de los estándares internacionales, existen normativas locales que regulan la instalación de sistemas de cableado en cada país. En el contexto colombiano, es fundamental considerar:

    .row.bg2.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center.mb-4
          .col-lg-3.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')      
          .col-lg-9.my-lg-0.my-3
            AcordionA(tipo="a" clase-tarjeta="tarjeta bg3")
              div(titulo="RETIE (Reglamento Técnico de Instalaciones Eléctricas) ")
                p Este reglamento establece los requisitos mínimos de seguridad en las instalaciones eléctricas, tanto en infraestructura como en materiales, y aplica a todo tipo de instalación eléctrica en el territorio nacional. Incluye disposiciones específicas para instalaciones de baja tensión, que son comunes en los sistemas de cableado estructurado. 
              div(titulo="Código Eléctrico Colombiano (NTC2050)  ")
                p La Norma Técnica Colombiana 2050 es una adaptación del Código Eléctrico Nacional de Estados Unidos y regula las prácticas seguras para el diseño, la construcción y la instalación de sistemas eléctricos. Este código también establece los parámetros de seguridad para instalaciones de redes de telecomunicaciones.  
              div(titulo="RETILAP (Reglamento Técnico de Iluminación y Alumbrado Público) ")
                p Aunque se centra principalmente en la iluminación, algunas de sus disposiciones pueden ser relevantes para instalaciones de cableado estructurado en espacios que incluyan sistemas de alumbrado.    

        p La normativa nacional es necesaria para asegurar que todas las instalaciones eléctricas y de cableado estructurado cumplan con los requisitos de seguridad y calidad exigidos en Colombia. Esto protege a los usuarios y garantiza la longevidad de las instalaciones. 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Certificaciones y cumplimiento

    p La certificación de sistemas de cableado estructurado implica la verificación del cumplimiento de los estándares y normativas relevantes. Para los profesionales del sector, conocer y aplicar los procesos de certificación  ofrece garantías de calidad y asegura que las instalaciones cumplen con las expectativas de rendimiento y seguridad. Entre los procesos de certificación más relevantes se encuentran:

    .row.justify-content-center.text-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-5 Certificación de componentes y sistemas
            p.mb-0 La certificación garantiza que los cables, conectores y otros componentes cumplen con los parámetros de rendimiento especificados por las normativas internacionales, como TIA/EIA e ISO/IEC.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 Pruebas de desempeño (certificación de instalación)
            p.mb-0 Estas pruebas se realizan mediante equipos especializados para verificar que las instalaciones cumplen con los parámetros de rendimiento establecidos en las normas. Estas pruebas incluyen verificación de la continuidad del cableado, la atenuación, el diafonismo (crosstalk) y la resistencia de los cables.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-4 Certificaciones ambientales y de seguridad
            p.mb-0 En muchos casos, es necesario que el sistema de cableado estructurado cumpla con requisitos ambientales, como el manejo adecuado de residuos y la minimización de impactos ambientales. Algunas certificaciones también evalúan los niveles de seguridad eléctrica en las instalaciones.   

    p La certificación asegura el cumplimiento normativo, proporciona un aval de calidad que permite a los instaladores demostrar la competencia y seguridad de sus instalaciones. Esto resulta especialmente importante en sectores críticos, como centros de datos y telecomunicaciones, donde el rendimiento y la seguridad son imprescindibles. 

    .row.bg4.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-8      
            .titulo-sexto.color-acento-botones
              h5 Figura 1.
              span Marco Normativo del cableado estructurado
            
            .mb-2
              img.img-a.img-t(src='@/assets/curso/temas/13.svg' alt='La Figura 1 se denomina «Marco normativo del cableado estructurado» y presenta una síntesis de la normatividad nacional e internacional.') 
            figcaption Fuente: OIT, 2024.                                                                                 
</template>

<script>
import TabsA from '../bootstrap/TabsA'
import AcordionA from '../bootstrap/AcordionA'
export default {
  name: 'Tema1',
  components: { TabsA, AcordionA },
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
