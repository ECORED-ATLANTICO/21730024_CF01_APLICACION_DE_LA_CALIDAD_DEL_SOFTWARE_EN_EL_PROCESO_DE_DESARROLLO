<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medición de la Calidad del 
        i software

    div.tarjeta-horz
      img(src='@/assets/curso/temas/tema2/img_01.png', alt='Imagen decorativa')
      div
        p.mb-0 La medición de la calidad en el <em>software</em> implica cuantificar aspectos que, en muchos casos, resultan intangibles, lo cual supone desafíos significativos en el proceso de evaluación.

    separador 

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_4_1 4.1	Desafíos en la medición de atributos intangibles
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

    .row.mb-4
      .col-md-12.col-lg-8.mb-3
        p Entre los principales desafíos se encuentra la dificultad para cuantificar atributos como la usabilidad, la fiabilidad o la satisfacción del usuario. Estas características, al no ser físicas, requieren la adopción de métodos de medición que combinen análisis cualitativos y cuantitativos, basados en indicadores y métricas específicas. La complejidad reside en traducir percepciones y comportamientos en datos objetivos que permitan evaluar la calidad del producto. La calidad del <em>software</em> es intangible; por ejemplo, la "usabilidad" no se mide con unidades físicas. Se requieren métodos como encuestas de satisfacción con una escala del 1 al 5 para evaluar facilidad de uso o métricas de interacción con número de clics para completar una tarea.
      .col-md-8.col-lg-4.mb-3.col-10.mx-auto
        figure
          img(src="@/assets/curso/temas/tema4/img_02.svg", alt="Imagen decorativa").mx-auto
    
    separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_4_2 4.2	Enfoque cualitativo frente al cuantitativo
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

    .row.mb-4.align-items-center
      .col-md-2.col-lg-1.mb-3.col-4.mx-auto.d-none.d-md-block
        figure
          img(src="@/assets/curso/temas/tema4/img_03.svg", alt="Imagen decorativa").mx-auto
      .col-lg-9.mb-3.col-12
        p.mb-0 El enfoque cualitativo se centra en describir y analizar características mediante observaciones, encuestas y estudios de caso, aportando una visión integral de la experiencia del usuario. Por otro lado, el enfoque cuantitativo utiliza datos numéricos obtenidos a través de métricas y pruebas automatizadas. La combinación de ambos enfoques permite una evaluación más completa, en la que se contraponen los resultados medibles con la interpretación del comportamiento y satisfacción del usuario.
      .col-md-2.col-lg-2.mb-3.col-6.mx-auto.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema3/img_08.svg", alt="Imagen decorativa").mx-auto


    .col-lg-12.mb-3.bg-lightblue.p-4
      SlyderA(tipo="b")
        .tarjeta.p-3.px-md-5
          .row.justify-content-center.align-items-center.p-1
            .col-md-12.col-xl-8.mb-4
              p.mb-0
                b Enfoque cualitativo
              p Se centra en describir y analizar características mediante observaciones, encuestas y estudios de caso. Aporta una visión integral de la experiencia del usuario.

              p.mb-0
                b Objetivo
              p Comprender el comportamiento, opiniones y percepciones de los usuarios.

              p.mb-0
                b Ejemplo
              p <em>Feedback</em> de usuarios en pruebas beta.

              p.mb-0
                b Herramientas
              p.mb-0 - Entrevistas y encuestas abiertas
              p.mb-0 - Evaluaciones heurísticas según Nielsen
              p.mb-0 - Estudios de caso
              p.mb-0 - Grupos focales


            
            .col-md-8.col-xl-4.mb-3
              figure
                img(src="@/assets/curso/temas/tema4/img_04.png", alt="Imagen Decorativa").mx-auto
        .tarjeta.bg-01.p-3
          .row.justify-content-center.align-items-center.p-1
            .col-md-12.col-xl-8.mb-4
              p.mb-0
                b Enfoque cuantitativo
                p Utiliza datos numéricos obtenidos a través de métricas y pruebas automatizadas. Permite realizar mediciones objetivas y comparaciones precisas.


                p.mb-0
                  b Objetivo:
                p Medir variables concretas como tiempo, frecuencia o cantidad.

                p.mb-0
                  b Ejemplo:
                p Tiempo de carga de una página web en milisegundos.

                p.mb-0
                  b Herramientas:
                p.mb-0 - <em>Google Analytics</em>
                p.mb-0 - Tests A/B
                p.mb-0 - Métricas de rendimiento 
                p.mb-0 - <em>Software</em> de monitoreo de usabilidad
            
            .col-md-8.col-xl-4.mb-3
              figure
                img(src="@/assets/curso/temas/tema4/img_05.png", alt="Imagen Decorativa").mx-auto
              
              


</template>

<script>
export default {
  name: 'Tema4',
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
