<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-3
      .col-md-12.col-lg-8.mb-3
         p A continuación, se presenta una visión general del componente formativo “Fundamentos y procesos en calidad de software”. En este módulo se ofrece un análisis profundo de los principios y metodologías que aseguran la calidad en el desarrollo de software. Se exploran aspectos esenciales como la aplicación de la calidad en el desarrollo, donde se destacan factores clave tales como el análisis, las pruebas, el código limpio y la refactorización, así como la relación entre procesos, calidad interna/externa y el contexto de uso. Además, se abordan temas fundamentales como el ciclo de vida del software, la transición de normas (ISO/IEC 9126 y ISO/IEC 14598 a ISO/IEC 25000), la medición de la calidad (incluyendo desafíos y enfoques cuantitativos y cualitativos), y los factores de calidad y evaluación según las normas internacionales. Asimismo, se incorporan modelos y estándares de apoyo como PSP, TSP, CMMI y GQM, y se describe la estructura de la familia de normas ISO/IEC 25000, lo que proporciona a los aprendices herramientas para analizar, evaluar y mejorar la calidad de sus desarrollos de software. Se propone la elaboración de un mapa conceptual que integre estos temas, mostrando la interrelación entre cada uno de los elementos del proceso de calidad .
      .col-md-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt").mx-auto
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt=" ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
