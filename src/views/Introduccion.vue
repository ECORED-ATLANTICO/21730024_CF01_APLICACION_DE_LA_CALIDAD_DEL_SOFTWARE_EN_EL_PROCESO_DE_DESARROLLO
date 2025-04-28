<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3
    
      .col-md-12.col-lg-8.mb-3
        p El componente formativo “Fundamentos y procesos en calidad de 
          i software
          | ” explora los principios esenciales para garantizar que el 
          i software 
          | cumpla con estándares de excelencia reconocidos globalmente. Incluyendo desde normas históricas como la ISO/IEC 9126, que define atributos clave como funcionalidad y usabilidad, hasta su evolución hacia la familia ISO/IEC 25000 (SQuaRE), este recorrido integra métricas prácticas y modelos de mejora continua. El objetivo es comprender cómo transformar códigos en productos confiables, eficientes y alineados con las demandas actuales de la industria. A través de un enfoque teórico-práctico, se analizará la transición de normas ISO/IEC 9126 y 14598 al marco SQuaRE y la aplicación de calidad en el ciclo de vida del 
          i software 
          | mediante modelos como PSP, TSP, CMMI y GQM. Se identifican herramientas para evitar fallos costosos y transformar desarrollos en soluciones escalables, utilizando mapas conceptuales, casos reales y metodologías que convierten la calidad en un hábito estratégico.
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/introduccion/img_1.png", alt="alt").mx-auto
      
      .video.mb-5
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5d_qM71avJY?si=Uz0JT_3e6p6oCWQx" title="Fundamentos y procesos en calidad de software" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        

</template>

<script>
export default {
  name: 'Introduccion',
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
