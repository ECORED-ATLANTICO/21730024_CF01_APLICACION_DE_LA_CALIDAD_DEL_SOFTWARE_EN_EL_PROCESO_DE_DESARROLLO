<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg04
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 8
        h1 Medición de la Calidad del 
          i software
  
      div.tarjeta-horz
        img(src='@/assets/curso/temas/tema8/img_01.png', alt='Imagen decorativa')
        div
          p.mb-0 La familia ISO/IEC 25000, también conocida como SQuaRE, integra un conjunto de normas que ofrecen un marco integral para la gestión y evaluación de la calidad del 
            i software.
  
      separador 
  
      div.mb-5(data-aos="fade-right")
        h3.position-relative#t__1 8.1	Divisiones del modelo SQuaRE
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

      p.mb-4 El modelo SQuaRE se compone de varias divisiones que abordan aspectos específicos de la calidad:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img_02.svg'  alt='Imagen Descriptiva').w-auto
          .tarjeta.bg-secundario-20
            .p-4
              p.mb-0
                b Gestión de calidad (ISO/IEC 2500n): 
              p establece directrices para la administración de la calidad en el desarrollo. (ejemplo: ISO/IEC 25001 para planificación.)

        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema8/img_03.svg'  alt='Imagen Descriptiva').w-auto
            .tarjeta.bg-secundario-20
              .p-4
                p.mb-0
                  b Modelo de calidad (ISO/IEC 2501n): 
                p define las características y subcaracterísticas que debe cumplir el 
                  i software 
                  | en términos de calidad interna, externa y en uso. Ejemplo: ISO/IEC 25010 para usabilidad.

        .tarjeta-avatar
            img(src='@/assets/curso/temas/tema8/img_04.svg'  alt='Imagen Descriptiva').w-auto
            .tarjeta.bg-secundario-20
              .p-4
                p.mb-0
                  b Medidas de calidad (ISO/IEC 2502n): 
                p ofrece un marco de referencia para la definición de métricas y medidas primitivas que permiten evaluar de manera objetiva la calidad. Ejemplo: ISO/IEC 25023 para rendimiento.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img_05.svg'  alt='Imagen Descriptiva').w-auto
          .tarjeta.bg-secundario-20
            .p-4
              p.mb-0
                b Requisitos de calidad (ISO/IEC 2503n): 
              p especifica los requerimientos que debe satisfacer el 
                i software 
                | para cumplir con las expectativas del cliente. Ejemplo: ISO/IEC 25030 para especificaciones. 

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img_06.svg'  alt='Imagen Descriptiva').w-auto
          .tarjeta.bg-secundario-20
            .p-4
              p.mb-0
                b Evaluación de calidad (ISO/IEC 2504n): 
              p proporciona las pautas y procedimientos para llevar a cabo la valoración y auditoría del producto. Ejemplo: ISO/IEC 25044 para evaluadores; ISO/IEC 25000, 2014. 

      p.mb-5 A modo de referencia, la siguiente tabla resume las divisiones incluidas en el modelo SQuaRE:

      .row.mb-5
        .col-lg-10.mb-2.mx-auto
          .titulo-sexto.bg-11.mb-4
              h5 Tabla 3. 
              span
                i Divisiones del modelo SQuaRE y sus contenidos principales
          
          table.style01
            caption Fuente: 
              span SENA (2025).
            thead.bg01
              tr.text-white
                th División
                th Contenidos principales
            tbody
              tr
                td 2500n (Gestión)
                td Directrices y parámetros de gestión de la calidad. 
              tr
                td 2501n (Modelo)
                td Definición de características y subcaracterísticas de calidad (interna, externa y en uso).
              tr
                td 2502n (Medidas)
                td Modelo de referencia para la definición de métricas y medidas primitivas.
              tr
                td 2503n (Requisitos)
                td Especificación de los requisitos de calidad a satisfacer.
              tr
                td 2504n (Evaluación)
                td Pautas para la evaluación y auditoría del producto de 
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
