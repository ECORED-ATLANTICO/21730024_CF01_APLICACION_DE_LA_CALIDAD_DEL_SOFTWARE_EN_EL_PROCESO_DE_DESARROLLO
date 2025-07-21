<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bg05
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo de vida del 
        i software

    div.tarjeta-horz
      img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen decorativa')
      div
        p.mb-0 El ciclo de vida del 
          i software 
          | comprende una serie de fases que estructuran el proceso de desarrollo, permitiendo una gestión ordenada y la aplicación de medidas de control y mejora continua.

    separador 

    div.mb-5(data-aos="fade-right")
        h3.position-relative#t_2_1 2.1	Fases: requerimientos, diseño, codificación, pruebas, validación y mantenimiento
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
    
    .row
      .col-md-8.col-lg-3.mb-3.col-10.mx-auto
        figure
          img(src="@/assets/curso/temas/tema2/img_02.png", alt="Imagen decorativa").mx-auto
      .col-md-12.col-lg-9.mb-3
        p El proceso inicia con la definición de requerimientos, en donde se identifican las necesidades del cliente y se establecen los objetivos del producto. Posteriormente, en la fase de diseño se define la arquitectura y se planifica la estructura del 
          i software. 
          | La codificación consiste en la implementación del diseño a través del desarrollo del código, fase en la que se aplican buenas prácticas para garantizar un código limpio. Durante la etapa de pruebas se ejecutan evaluaciones para identificar errores y asegurar la funcionalidad. La validación permite comprobar que el producto cumple con los requerimientos establecidos, y el mantenimiento se encarga de las actualizaciones y correcciones posteriores a la entrega.
     
    separador 

    div.mb-5(data-aos="fade-right")
        h3.position-relative#t_2_2 2.2	Herramientas de revisión y auditoría
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')
    
    .row
      .col-md-2.col-lg-1.mb-3.col-4.mx-auto
        figure
          img(src="@/assets/curso/temas/tema2/img_03.svg", alt="Imagen decorativa").mx-auto
      .col-md-12.col-lg-11.mb-3
        p Para asegurar la calidad durante cada fase, se emplean diversas herramientas de revisión y auditoría, tales como sistemas de control de versiones, <em>software</em> de análisis estático de código y listas de chequeo para la revisión de requisitos y documentación. Estas herramientas permiten detectar inconsistencias, mejorar la calidad del código y garantizar el cumplimiento de las normativas vigentes en la industria.
     
    .row.d-flex.mb-5
      .col-lg-6.col-md-12.d-flex.flex-column.mb-3.mb-lg-0
        .tarjeta.bg-secundario-20.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
          .row.align-items-center
            .col-md-2
              figure
                img(src="@/assets/curso/temas/tema2/img_04.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-3
            .col-md-10
              p.mb-0
                b Revisión de código: 
                | herramientas como <em>SonarQube</em> detectan vulnerabilidades como <em>SQL injection</em>.
      .col-lg-6.col-md-12.d-flex.flex-column
        .tarjeta.bg-secundario-20.p-4.d-flex.flex-column.justify-content-center.flex-grow-1
          .row.align-items-center
            .col-md-2
              figure
                img(src="@/assets/curso/temas/tema2/img_05.svg", alt="Imagen decorativa").mx-auto.w-auto.mb-3
            .col-md-10
              p.mb-0
                b Auditorías de procesos: 
                | métodos como CMMI evalúan la madurez organizacional en niveles del 1 (<em>ad-hoc</em>) al 5 (optimizado).


    .col-lg-10.mb-4.mx-auto
      .titulo-sexto.mb-4
        h5 Figura 2. 
        span Ciclo de vida del software

      figure.mb-4
        img(src='@/assets/curso/temas/tema2/img_06.svg', alt='Se detalla en la figura del ciclo de vida del software las siguientes fases: Definición de necesidades, análisis, diseño, codificación, pruebas, validación, mantenimiento y evolución.').mx-auto
        figcaption 
          b Fuente: 
          | SENA, 2025.


</template>

<script>
export default {
  name: 'Tema2',
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
