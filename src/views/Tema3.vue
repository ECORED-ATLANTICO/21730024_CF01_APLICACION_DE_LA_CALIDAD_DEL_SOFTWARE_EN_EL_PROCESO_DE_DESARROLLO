<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Transición de las Normas ISO/IEC 9126 e ISO/IEC 14598 a ISO/IEC 25000

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg03
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La evolución de las normas que regulan la calidad en el desarrollo de
              i software 
              | ha permitido integrar nuevos criterios y metodologías que fortalecen la medición y evaluación del producto.

        separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_3_1 3.1	Fases: requerimientos, diseño, codificación, pruebas, validación, mantenimiento
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

    .row.mb-4
      .col-md-12.col-lg-8.mb-3
        p La norma ISO/IEC 9126 se estableció como referencia para definir y medir la calidad de los productos de 
          i software, 
          | mientras que la ISO/IEC 14598 se orientó a la evaluación de dichos productos mediante la aplicación de métricas específicas. Con el tiempo, la necesidad de un marco más completo y actualizó surgió, lo que condujo a la integración de ambas normas en el conjunto ISO/IEC 25000. Este cambio responde a la evolución de las tecnologías y a la demanda de una evaluación que abarque tanto la calidad del producto como la eficiencia en el uso, pero presentaban limitaciones:
        .tarjeta.bg-acento-contenido-20.p-3.d-flex.flex-column.justify-content-center.flex-grow-1.mb-2
          .row.align-items-center
            .col-md-1
              figure
                img(src="@/assets/curso/temas/tema3/img_03.svg", alt="Imagen decorativa").mx-auto.w-auto
            .col-md-11
              p.mb-0
                b Fragmentación: 
                | métricas y requisitos dispersos en múltiples documentos.
        .tarjeta.bg-acento-contenido-20.p-3.d-flex.flex-column.justify-content-center.flex-grow-1.mb-2
          .row.align-items-center
            .col-md-1
              figure
                img(src="@/assets/curso/temas/tema3/img_04.svg", alt="Imagen decorativa").mx-auto.w-auto
            .col-md-11
              p.mb-0
                b Fragmentación: 
                | métricas y requisitos dispersos en múltiples documentos.
        .tarjeta.bg-acento-contenido-20.p-3.d-flex.flex-column.justify-content-center.flex-grow-1.mb-2
          .row.align-items-center
            .col-md-1
              figure
                img(src="@/assets/curso/temas/tema3/img_05.svg", alt="Imagen decorativa").mx-auto.w-auto
            .col-md-11
              p.mb-0
                b Fragmentación: 
                | métricas y requisitos dispersos en múltiples documentos.
      .col-md-8.col-lg-4.mb-3.col-10.mx-auto
        figure
          img(src="@/assets/curso/temas/tema3/img_02.png", alt="Imagen decorativa").mx-auto


    .row.tarjeta-horz-offset-left.mb-5
      .col-md-10.mx-auto.bg-blue.rounded-4
        .row.align-items-center
          .col-md-2
            figure
              img(src="@/assets/curso/temas/tema3/img_06.png", alt="Imagen decorativa").w-auto.mx-auto
          .col-md-10.p-5
            p La familia ISO/IEC 25000 SQuaRE surge en 2014 como un marco unificado, integrando y actualizando estos estándares. Su objetivo es ofrecer un enfoque holístico que abarque:
            p.mb-0
              b Calidad del producto: 
              | características técnicas.
            p.mb-0
              b Calidad en uso: 
              | experiencia del usuario final.
            p.mb-0
              b Evaluación sistemática: 
              | procesos repetibles y adaptables (ISO/IEC, 2014).


    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_3_2 3.2	Integración en el marco 
        i SQuaRE
        img.w-auto.pt-2(src="@/assets/curso/temas/border_title.svg", alt="Imagen decorativa")

    .row.mb-4.align-items-center
      .col-md-2.col-lg-2.mb-3
        figure
          img(src="@/assets/curso/temas/tema3/img_08.svg", alt="Imagen decorativa").mx-auto.w-auto
      .col-md-12.col-lg-10.mb-3
        p El modelo SQuaRE 
          i (System and Software Quality Requirements and Evaluation) 
          | consolida los elementos de calidad de las normas anteriores y establece directrices para definir, medir y evaluar la calidad del 
          i software 
          | en función de requisitos internos, externos y de uso. La integración en el marco SQuaRE permite disponer de un modelo integral que favorece la planificación, la ejecución de pruebas y la gestión de la calidad de manera sistemática. SQuaRE incorpora:
    
    .row.d-flex.mb-5
      .col-lg-6.col-md-12.d-flex.flex-column.mb-3.mb-lg-0
        .tarjeta.bg-acento-contenido-20.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
          .row.align-items-center
            .col-md-2
              figure
                img(src="@/assets/curso/temas/tema3/img_09.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-2
            .col-md-10
              p.mb-0
                b Modelos de calidad: 
                | define 8 características y 31 subcaracterísticas. Ejemplo: La eficiencia incluye subcaracterísticas como comportamiento temporal (tiempo de respuesta) y utilización de recursos (memoria consumida).
      .col-lg-6.col-md-12.d-flex.flex-column
        .tarjeta.bg-acento-contenido-20.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
          .row.align-items-center
            .col-md-2
              figure
                img(src="@/assets/curso/temas/tema3/img_10.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-2
            .col-md-10
              p.mb-0
                b Métricas estandarizadas: 
                | ISO/IEC 25023 proporciona fórmulas para medir atributos cuantificables. Ejemplo: tiempo de respuesta promedio. 

    .row
      .col-lg-10.mb-4.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 2. 
          span
            i Evolución hacia SQuaRE
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img_11.svg', alt='').mx-auto
          figcaption 
            b Fuente: 
            | SENA, 2025 

</template>

<script>
export default {
  name: 'Tema3',
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
