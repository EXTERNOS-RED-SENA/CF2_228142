<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conclusiones


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p En conclusión, el proceso de instalación de cableado estructurado es una tarea técnica y meticulosa que exige tanto un profundo conocimiento de los estándares normativos como una ejecución cuidadosa y segura. Cumplir con los estándares internacionales y las normativas nacionales garantiza que el sistema de cableado sea fiable y duradero, asegura que la instalación sea segura para el personal y para el entorno. El cumplimiento de normas como el RETIE y el Código Eléctrico Colombiano, entre otras, brinda un marco sólido que regula y respalda cada fase del proyecto, proporcionando a las organizaciones sistemas de comunicación eficientes y seguros.

        p La aplicación de buenas prácticas de seguridad y control de calidad durante la instalación es fundamental para prevenir accidentes y asegurar el funcionamiento óptimo del sistema. La capacitación del equipo de trabajo en la gestión de riesgos y el uso adecuado de herramientas y equipos de protección protege al personal, posibles daños a los componentes de la infraestructura instalada. Al mantener un estricto control de calidad, se puede verificar que el sistema cumpla con los estándares de rendimiento establecidos, lo que a su vez facilita futuras labores de mantenimiento y ampliación del sistema de red.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='')  

    .row.justify-content-center.mb-4
      .col-lg-auto.pt-lg-0.pt-md-4.j1
        img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='')
      .col.pt-lg-0.pt-md-4
        .bg1.p-3.h-100.j1
          p.mb-0 La importancia de la documentación técnica no puede subestimarse, ya que es el registro detallado de cada componente y de cada procedimiento. La existencia de planos, diagramas, especificaciones técnicas y protocolos de verificación permite a los técnicos y supervisores contar con información clara y precisa que garantiza la instalación adecuada y el mantenimiento posterior del sistema. Además, esta documentación asegura que cualquier persona que trabaje en el sistema en el futuro tendrá una comprensión completa de su estructura y diseño.

    .row.justify-content-center.align-items-center
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/52.png' alt='')      
      .col-lg-8.my-lg-0.my-3
        img.img-t.mb-4(src='@/assets/curso/temas/53.png' alt='')      

        p En suma, la instalación de cableado estructurado requiere una combinación de conocimientos normativos, habilidades técnicas y compromiso con las mejores prácticas de seguridad y calidad. Al integrar estos elementos en cada etapa del proceso, es posible lograr una infraestructura de comunicaciones que sea eficiente, segura y adaptable a las demandas futuras. Este enfoque holístico optimiza el funcionamiento del sistema, asegura su sostenibilidad y rendimiento a lo largo del tiempo, contribuyendo al éxito y la confiabilidad de la red en cualquier organización o entorno donde se implemente.
       

</template>

<script>
export default {
  name: 'Tema5',
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
