<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg05
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Factores de Evaluación según ISO/IEC 14598
  
      div.tarjeta-horz
        img(src='@/assets/curso/temas/tema6/img_01.png', alt='Imagen decorativa')
        div
          p.mb-0 La norma ISO/IEC 14598 establece criterios y procedimientos para evaluar de forma objetiva el producto de 
            i software, 
            | complementando el modelo de calidad de la ISO/IEC 9126.
  
      separador 
  
      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_6_1 6.1	Características de la norma 
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
  

      .row.align-items-center
        .col-md-12.mb-3.col-12.mx-auto
          p La evaluación se fundamenta en criterios que aseguran que los procesos sean repetibles, es decir, que puedan ser ejecutados de manera consistente; reproducibles, garantizando que diferentes evaluadores obtengan resultados similares; e imparciales, para que la valoración se realice sin sesgos. Estos elementos permiten que la evaluación del software se base en medidas objetivas y confiables.

        .col-md-5.mb-3.col-10.mx-auto
          img(src='@/assets/curso/temas/tema6/img_02.png', alt='Imagen decorativa')
        .col-12.col-lg-7.mb-3
          SlyderF(columnas="col-12").bg-lightblue.p-4
            .tarjeta.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
              .row.align-items-center
                .col-md-2
                  figure
                    img(src="@/assets/curso/temas/tema6/img_03.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-3
                .col-md-10
                  p
                    b Repetitividad 
                  p Resultados consistentes en múltiples evaluaciones (ejemplo: misma métrica en diferentes equipos).
            .tarjeta.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
              .row.align-items-center
                .col-md-2
                  figure
                    img(src="@/assets/curso/temas/tema6/img_04.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-3
                .col-md-10
                  p
                    b Reproducibilidad 
                  p Métodos aplicables en diferentes contextos (ejemplo: evaluación en desarrollo y producción).
            .tarjeta.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
              .row.align-items-center
                .col-md-2
                  figure
                    img(src="@/assets/curso/temas/tema6/img_05.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-3
                .col-md-10
                  p
                  b Imparcialidad 
                  p  Neutralidad en la evaluación (ejemplo: uso de herramientas automatizadas) (ISO/IEC 14598, 1999). 

      separador 

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_6_2 6.2	Procesos para desarrolladores, usuarios finales, avaladores
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')


      .row.justify-content-center.mb-5
        p.mb-5 La norma define distintos procesos de evaluación que se aplican según el rol: 
        .col-lg-10.position-relative
          .avatar
            figure
              img(src="@/assets/curso/temas/tema6/img_06.svg", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema6/img_07.svg", alt="alt").img100
              .col
                p 
                b desarrolladores: 
                | se establecen pautas que permitan integrar la evaluación durante el proceso de codificación, facilitando la detección temprana de defectos. Ejemplo: TDD - 
                i Test-Driven Development.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center.pr-4
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema6/img_08.svg", alt="alt").img100
              .col
                p 
                b usuarios finales: 
                | se especifican procedimientos que aseguren que el 
                i software 
                | cumpla con las expectativas en su entorno de uso. Validando funcionalidades en escenarios reales. Ejemplo: pruebas A/B en una plataforma de 
                i e-learning.
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema6/img_09.svg", alt="alt").img100
              .col
                p 
                b avaladores o evaluadores externos: 
                | se plantean criterios independientes que permiten realizar una valoración objetiva y fundamentada del producto, certificando cumplimiento de estándares. Ejemplo: auditorías ISO 9001.
      .row
        .col-10.mx-auto
          p Esta división de procesos favorece la mejora continua y la identificación oportuna de áreas de oportunidad en el desarrollo del 
            i software.

  </template>

<script>
export default {
  name: 'Tema6',
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
