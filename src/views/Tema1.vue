<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg04
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Aplicación de la calidad en el desarrollo


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg01
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La calidad en el desarrollo de 
              i software 
              | es un eje fundamental para garantizar productos que cumplan con las expectativas funcionales, técnicas y de experiencia del usuario, se entiende como un conjunto de prácticas y métodos que aseguran que el producto final cumpla con los requerimientos, funcione de forma confiable y se adapte al contexto de uso.
              br 
              | En un entorno tecnológico en constante evolución, las normas internacionales actúan como guías para estandarizar procesos, métricas y criterios de evaluación. Este componente explora modelos como ISO/IEC 9126, ISO/IEC 14598 y la familia ISO 25000, que brindan marcos de referencia para medir, gestionar y mejorar la calidad del 
              i software 
              | desde su diseño hasta su mantenimiento.

        separador

      
      div.mb-5
        div.mb-5(data-aos="fade-right")
          h3.position-relative#t_1_1 1.1	Factores clave: análisis, pruebas, código limpio y refactorización
            img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='')

        p.mb-4 El proceso de aplicación de la calidad parte de la realización de un análisis riguroso que permite identificar requerimientos y posibles fallos en etapas tempranas. La ejecución de pruebas sistemáticas garantiza que el 
          i software 
          | cumpla con sus funciones, minimizando errores en producción. Asimismo, la elaboración de un código limpio, organizado, legible y documentado facilita la identificación y solución de errores, mientras que la refactorización consiste en la reestructuración del código sin alterar su funcionalidad para mejorar su mantenimiento y rendimiento. A continuación, se presenta un ejemplo de tabla que resume estos factores:

        .row.mb-0
          .col-lg-10.mb-2.mx-auto
            .titulo-sexto.bg-11.mb-4
                h5 Tabla 1. 
                span Factores clave en la aplicación de calidad en el desarrollo de software 
            
            table.style01
              caption Fuente: 
                span Sena (2025).
              thead.bg02
                tr
                  th Factor
                  th Descripción
              tbody
                tr
                  td Análisis
                  td Estudio y comprensión de los requerimientos y del contexto del desarrollo.
                tr
                  td Pruebas
                  td Ejecución de casos de prueba para validar el funcionamiento correcto en diversas condiciones.
                tr
                  td Código limpio
                  td Redacción de código claro, estructurado, bien documentado para facilitar su comprensión y mantenimiento.
                tr
                  td Refactorización
                  td Reorganización del código para mejorar su calidad sin modificar la funcionalidad existente.
      
      separador

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_1_2 1.2	Relación entre procesos, calidad interna/externa y contexto de uso
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
      
      p En la práctica, la calidad del 
        i software 
        | se evalúa a través de dos perspectivas principales: la calidad interna, que se centra en las características del código y su estructura (por ejemplo, la eficiencia y mantenibilidad), y la calidad externa, que considera la experiencia del usuario, el rendimiento y la seguridad en el entorno de uso. La integración de ambos enfoques en el proceso de desarrollo permite ajustar la aplicación de técnicas de revisión, auditoría y pruebas, garantizando que el producto se adecúe a las necesidades planteadas en su contexto operativo.

      .row.justify-content-center.align-items-center.mb-3.ordenar_tarjeta_lg.mb-5
        .col-md-6.col-lg-4.col-xl-4.mb-4.mb-md-2.col-10
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img_02.png", alt="alt").m-auto
        .col-lg-12.col-xl-8.mb-2
          .row 
            .col-12.col-lg-4.mb-4.col-md-6.d-flex
              .tarjeta.tarjeta--slyder.p-4.bg-secundario-20
                .row.justify-content-center
                  .col-8.flex.flex.row.gap-3
                    img.w-auto.mx-auto(src='@/assets/curso/temas/tema1/img_03.svg', alt='Imagen Decorativa')
                    h4.text-center.mb-0 Calidad interna:
                p.text-center.mb-0 mide atributos como modularidad o cobertura de pruebas.
            .col-12.col-lg-4.mb-4.col-md-6.d-flex
              .tarjeta.tarjeta--slyder.p-4.bg-secundario-20
                .row.justify-content-center
                  .col-8.bg-04.flex.flex.row.gap-3
                    img.w-auto.mx-auto(src='@/assets/curso/temas/tema1/img_03.svg', alt='Imagen Decorativa')
                    h4.text-center.mb-0 Calidad externa:
                p.text-center.mb-0 evalúa resultados tangibles, como tiempo de respuesta o tasa de errores.
            .col-12.col-lg-4.mb-4.col-md-6.d-flex
              .tarjeta.tarjeta--slyder.p-4.bg-secundario-20
                .row.justify-content-center
                  .col-8.bg-04.flex.flex.row.gap-3
                    img.w-auto.mx-auto(src='@/assets/curso/temas/tema1/img_03.svg', alt='Imagen Decorativa')
                    h4.text-center.mb-0 Contexto de uso: 
                p.text-center.mb-0 considera factores como dispositivos móviles o conexiones lentas en zonas rurales.


      .col-lg-10.mb-4
        .titulo-sexto.mb-4
          h5 Figura 1. 
          span Interrelación entre calidad, interna, calidad externa y en uso

        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img_04.svg', alt='Se detalla en la figura: Calidad interna, Calidad externa, Contexto de uso, PRODUCTO DE SOFTWARE Alineado con requisitos del usuario.').mx-auto
          figcaption 
            b Fuente: 
            | SENA, 2025.
        
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
