<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 En la actualidad, la transformación digital ha modificado profundamente la forma en que las organizaciones se comunican con sus diferentes públicos. Las redes sociales, los sitios web, las plataformas de mensajería y otros canales digitales se han consolidado como espacios fundamentales para fortalecer la presencia institucional, promocionar productos o servicios y establecer relaciones más directas con las audiencias. En este contexto, la creación y publicación de contenidos digitales constituye una competencia esencial, ya que exige construir mensajes efectivos, diseñar contenidos visualmente organizados, seleccionar las herramientas adecuadas y difundir la información de manera estratégica según los objetivos organizacionales y las características del público objetivo.
      .row.justify-content-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 Este componente formativo desarrolla conocimientos y habilidades para el diseño, la creación, la gestión y la publicación de contenidos digitales empresariales. A lo largo de su desarrollo se abordan la comunicación estratégica, la redacción de mensajes digitales, el diseño gráfico para redes sociales, el uso de herramientas digitales para la creación y difusión de contenidos, la administración de publicaciones en línea, el posicionamiento y la visibilidad del contenido, así como la captación y gestión estratégica de datos. Además, se integran buenas prácticas relacionadas con la publicación empresarial, la evaluación de resultados y el respeto por la propiedad intelectual en los entornos digitales.
        .col-xl-auto.col-md-9(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 En conjunto, estos contenidos proporcionan una visión integral de la comunicación digital empresarial, articulando fundamentos conceptuales con aplicaciones prácticas que permiten planificar, diseñar, publicar, administrar y optimizar contenidos de manera organizada, responsable y coherente con las necesidades de las organizaciones y las dinámicas propias del entorno digital actual.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
