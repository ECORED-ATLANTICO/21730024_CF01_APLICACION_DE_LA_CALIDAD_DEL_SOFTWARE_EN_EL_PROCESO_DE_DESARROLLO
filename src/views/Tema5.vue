<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Factores de Calidad según ISO/IEC 9126
      
      
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.mb-2
        .bloque-texto-g.bloque-texto-g.p-3.p-sm-4.p-md-5.bg01
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img_01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p La norma ISO/IEC 9126 define una serie de características fundamentales que deben cumplir los productos de 
              i software 
              | para ser considerados de calidad, estructuradas en diversas dimensiones.

        separador

    div.mb-5(data-aos="fade-right")
      h3.position-relative#t_5_1 5.1 Características de la norma 
        img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

    .row.mb-4
      .col-6.col-md-4.mx-auto
        figure
         img(src="@/assets/curso/temas/tema5/img_02.png", alt="Imagen decorativa").mx-auto.mb-3
      .col-12.col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.p-4.bg-secundario-20(titulo="Funcionalidad")
            div.d-flex.align-items-center
              p Se refiere a la capacidad del 
                i software 
                | para satisfacer las necesidades especificadas, abarcando aspectos como adecuación, exactitud, interoperabilidad, seguridad de acceso y cumplimiento de la funcionalidad.
              img(src="@/assets/curso/temas/tema5/img_03.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          .tarjeta.p-4.bg-secundario-20(titulo="Fiabilidad")
            div.d-flex.align-items-center
              p Evalúa la capacidad del 
                i software 
                | para mantener su desempeño bajo condiciones específicas, considerando la madurez, tolerancia a fallos, capacidad de recuperación y cumplimiento de la fiabilidad.
              img(src="@/assets/curso/temas/tema5/img_04.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          .tarjeta.p-4.bg-secundario-20(titulo="Usabilidad")
            div.d-flex.align-items-center
              p Se relaciona con el esfuerzo requerido para el uso del 
                i software, 
                | abarcando la facilidad para entender, aprender, operar y la capacidad de atracción.
              img(src="@/assets/curso/temas/tema5/img_05.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          .tarjeta.p-4.bg-secundario-20(titulo="Eficiencia")
            div.d-flex.align-items-center
              p Mide la relación entre el rendimiento del 
                i software
                | y los recursos empleados, incluyendo el comportamiento temporal y la utilización de recursos.
              img(src="@/assets/curso/temas/tema5/img_06.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          .tarjeta.p-4.bg-secundario-20(titulo="Mantenibilidad")
            div.d-flex.align-items-center
              p Valora el grado de facilidad para modificar el 
                i software, 
                | considerando aspectos como el análisis, cambios, estabilidad y pruebas.
              img(src="@/assets/curso/temas/tema5/img_07.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          .tarjeta.p-4.bg-secundario-20(titulo="Portabilidad")
            div.d-flex.align-items-center
              p Hace énfasis en la capacidad del 
                i software 
                | para ser transferido entre diferentes entornos, evaluando la adaptabilidad, instalabilidad, coexistencia y reemplazo. 
              img(src="@/assets/curso/temas/tema5/img_08.svg", alt="Imagen decorativa").mx-auto.w-auto.p-5
          
      .row.mb-3
        .col-lg-10.mb-2.mx-auto
          .titulo-sexto.bg-11.mb-4
              h5 Tabla 2. 
              span
                i Características y subatributos de calidad del software según el modelo ISO/IEC 9126
          
          table.style01
            caption Fuente: 
              span Sena (2025).
            thead.bg02
              tr.text-white
                th Caracteristicas
                th Subatributos
            tbody
              tr
                td Funcionalidad
                td Adecuación, exactitud, interoperabilidad, seguridad, cumplimiento
              tr
                td Fiabilidad
                td Madurez, tolerancia a fallos, capacidad de recuperación, cumplimiento
              tr
                td Usabilidad
                td Facilidad de comprensión, aprendizaje, operación y atracción
              tr
                td Eficiencia
                td Comportamiento temporal, utilización de recursos
              tr
                td Mantenibilidad
                td Capacidad de análisis, cambio, estabilidad, pruebas
              tr
                td Portabilidad
                td Adaptabilidad, instalabilidad, coexistencia, reemplazo
      separador

      div.mb-5(data-aos="fade-right")
        h3.position-relative#t_5_2 5.2	Métricas externas, internas y de calidad en uso
          img.w-auto.pt-2(src='@/assets/curso/temas/border_title.svg', alt='Imagen decorativa')

      .row.mb-4
        .col-md-12.col-lg-9.mb-3
          p Las métricas se dividen en tres categorías:
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Métricas internas")
              p Se obtienen mediante análisis del código y estructuras internas del software sin necesidad de su ejecución. Ejemplo: complejidad ciclomática (número de caminos en el código).
            .row(titulo="Métricas externas")
              p.mb-0 Se aplican durante la ejecución y permiten evaluar el comportamiento en condiciones reales de uso. 
              p Ejemplo: tasa de errores en producción (1 error por cada 1000 transacciones).
            .row(titulo="Métricas de calidad en uso ")
              p.mb-0 Se centran en la satisfacción del usuario y la efectividad del software en el entorno operativo, considerando aspectos como eficiencia, eficacia y satisfacción. Ejemplo: tiempo promedio para completar una compra en una app. 
          p Cada tipo de métrica complementa la evaluación global del software, posibilitando una revisión integral de sus atributos de calidad.
        .col-md-8.col-lg-3.mb-3.col-6.mx-auto
          figure
            img(src="@/assets/curso/temas/tema5/img_09.png", alt="Imagen decorativa").mx-auto

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
