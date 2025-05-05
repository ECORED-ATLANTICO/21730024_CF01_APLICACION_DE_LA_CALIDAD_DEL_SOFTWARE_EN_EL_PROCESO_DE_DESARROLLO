<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Modelos y estándares de apoyo
      
      
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg01.bg02
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Diversos modelos y estándares complementan las normas ISO, proporcionando herramientas y metodologías para la mejora de la calidad en el desarrollo de 
            i software.

      separador

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_7_1 7.1	PSP 
          i (Personal Software Process): 
          | fases y registro de tiempos
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

      .row.mb-3.align-items-center
        .col-md-5.col-lg-3.mb-3.col-6.mx-auto.mb-md-4
          figure
            img(src="@/assets/curso/temas/tema7/img_02.png", alt="Imagen decorativa").mx-auto
        .col-md-12.col-lg-7.mb-3.mb-md-4
          p.mb-0 El PSP es una metodología que permite a cada desarrollador gestionar de forma personal su proceso de trabajo. Se estructura en fases que van desde un proceso básico de identificación y registro de actividades (PSP 0) hasta un proceso cíclico de desarrollo de programas de mayor escala (PSP 3). El método enfatiza la planeación, la medición del tiempo y la identificación de defectos, facilitando la mejora continua a nivel individual. Se recomienda llevar un registro de tiempos mediante tablas que incluyan fecha, hora de inicio y fin, interrupciones, descripción de la actividad y unidades ejecutadas.
        .col-md-5.col-lg-2.mb-3.col-6.mx-auto
          figure
            img(src="@/assets/curso/temas/tema7/img_03.png", alt="Imagen decorativa").mx-auto
      
      separador
      
      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_7_2 7.2	TSP 
          i (Team Software Process):
          | trabajo en equipo y planificación
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg03
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img_04.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El TSP se orienta al trabajo colaborativo, promoviendo la coordinación y planificación en equipos de desarrollo. Bajo la guía de un <em>coach</em>, cada miembro conoce su rol y se establece un plan de actividades con tiempos definidos, lo que favorece la adaptación ante cambios y la optimización de recursos. La metodología se basa en la comunicación constante, la coordinación y la revisión periódica de los avances del proyecto.

      separador

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_7_3 7.3	CMMI 
          i (Capability Maturity Model Integration): 
          | niveles de madurez
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
      
      p.mb-5 El modelo CMMI proporciona un marco para la mejora de procesos en el desarrollo, mantenimiento y operación de 
        i software.
        | Se estructura en cinco niveles de madurez:
      
      .col-lg-10.mb-4.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 4. 
          span
            i Niveles de CMMI.

        figure.mb-4
          img(src='@/assets/curso/temas/tema7/img_05.svg', alt='').mx-auto
          figcaption 
            b Fuente: 
            | SENA, 2025

      .row.mb-3
        .col-10.mx-auto
          .cajon.color-acento-contenido.p-4
            p La aplicación de CMMI permite identificar y fortalecer los procesos críticos de la organización, favoreciendo la calidad y eficiencia en el desarrollo.


      separador

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_7_4 7.4	GQM 
          i (Goal Question Metric): 
          | metas, preguntas y métricas
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
      
      p.mb-5 El modelo GQM se basa en la definición de metas claras que se descomponen en preguntas específicas y, a partir de estas, se derivan métricas cuantificables. Este enfoque permite estructurar la medición de la calidad en tres niveles:
      
      .col-lg-10.mb-4.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 5. 
          span
            i Niveles de GQM

        figure.mb-5
          img(src='@/assets/curso/temas/tema7/img_06.svg', alt='').mx-auto
          figcaption 
            b Fuente: 
            | SENA, 2025

        p Esta metodología facilita la alineación de las actividades de evaluación con los objetivos estratégicos del desarrollo de 
          i software.

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
