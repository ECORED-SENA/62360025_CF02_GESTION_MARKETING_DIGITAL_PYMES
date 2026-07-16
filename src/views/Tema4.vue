<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Publicación y administración de contenidos en línea
      p.mb-5 La creación de contenido representa solo una parte del proceso de comunicación digital. Para que una estrategia empresarial sea efectiva, también es necesario administrar la publicación, actualización, organización y seguimiento de los contenidos en los diferentes canales digitales. La administración de contenidos en línea comprende el conjunto de actividades orientadas a planificar, publicar, actualizar y organizar la información, garantizando coherencia institucional, calidad en los contenidos y una adecuada experiencia para la audiencia.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Protocolos y criterios para la publicación digital
      p.mb-5 Las publicaciones empresariales deben responder a procedimientos previamente establecidos que permitan reducir errores y mantener la calidad de la comunicación. Antes de publicar un contenido, es recomendable verificar los siguientes aspectos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contenido
                  p.mb-0 Confirmar la exactitud de las fechas, datos de contacto, enlaces, nombres propios, cifras y la ortografía antes de publicar. Esta revisión garantiza que la información sea correcta, confiable y comprensible, reduciendo el riesgo de errores que puedan afectar la credibilidad de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diseño
                  p.mb-0 Revisar la alineación de los elementos, el contraste de colores, la legibilidad de los textos, la calidad de las imágenes y el uso adecuado de la identidad institucional. Esta verificación mejora la calidad visual de la publicación, facilita la lectura y fortalece la imagen de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Canal de difusión
                  p.mb-0 Verificar que la plataforma seleccionada sea la más adecuada para el tipo de contenido, el público objetivo y los objetivos de comunicación. Esta validación favorece un mayor alcance, incrementa la efectividad del mensaje y mejora la interacción con la audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aprobación interna
                  p.mb-0 Validar campañas, comunicados, anuncios o publicaciones institucionales mediante los procedimientos de revisión establecidos por la organización. Este proceso permite reducir errores, garantizar la coherencia de la información y mantener un mayor control sobre los contenidos antes de su difusión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
      .bg-1
        .px-5
          p.mb-5 Como apoyo al proceso de publicación, puede utilizarse una lista de verificación:
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Lista de verificación para la publicación de contenidos digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.texto-left Estado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información validada
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ortografía revisada
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseño validado
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Plataforma seleccionada
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Enlaces funcionales
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aprobación interna
                      td.texto-left Sí / No
          p.mb-0 La aplicación de estos controles disminuye los reprocesos y fortalece la confiabilidad de la comunicación digital.
          Separador
          #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.2 Actualización y administración de contenidos web
          p.mb-5 La información publicada debe mantenerse actualizada para garantizar que los usuarios accedan a contenidos vigentes y confiables. Un sitio o canal desactualizado puede afectar la imagen institucional y generar experiencias negativas. Los principales aspectos que deben revisarse periódicamente son los siguientes:
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 350px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Información publicada
                      p.mb-0.text-center Verificar que el contenido continúe vigente para evitar la difusión de información desactualizada.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Promociones y campañas
                      p.mb-0.text-center Retirar los contenidos vencidos para mantener organizada y actualizada la comunicación.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Datos de contacto
                      p.mb-0.text-center Actualizar teléfonos, direcciones y horarios para facilitar una atención oportuna al usuario.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Enlaces
                      p.mb-0.text-center Comprobar periódicamente su funcionamiento para garantizar el acceso a la información.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Sitio web
                      p.mb-0.text-center Revisar la navegación, la compatibilidad con dispositivos móviles y los tiempos de carga para favorecer una mejor experiencia del usuario.
              p.mb-0 Una actualización periódica contribuye a mantener la credibilidad y la calidad de los canales digitales de la organización. 
              Separador
              #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 4.3 Organización y administración escalable de contenidos
      .bg-1
        .px-5
          p.mb-5 A medida que aumenta la actividad digital de una organización, también crece la cantidad de publicaciones, campañas y recursos que deben administrarse. Por ello, resulta necesario implementar procesos que permitan mantener el orden y facilitar el crecimiento de la estrategia de comunicación. Las principales estrategias para administrar contenidos de forma escalable son las siguientes:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Estrategias para la organización y gestión de contenidos digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Estrategia
                      th.ajuste-border-tabla.texto-left Aplicación
                      th.texto-left Beneficio
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calendarización de contenidos
                      td.ajuste-border-tabla.texto-left Programar publicaciones con anticipación.
                      td.texto-left Mejora la planificación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Clasificación temática
                      td.ajuste-border-tabla.texto-left Organizar contenidos por campañas o categorías.
                      td.texto-left Facilita la localización de la información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Plantillas reutilizables
                      td.ajuste-border-tabla.texto-left Estandarizar diseños y formatos.
                      td.texto-left Reduce tiempos de producción.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Biblioteca de recursos
                      td.ajuste-border-tabla.texto-left Centralizar imágenes, logotipos y materiales gráficos.
                      td.texto-left Favorece la reutilización de recursos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Procesos de aprobación
                      td.ajuste-border-tabla.texto-left Definir responsables para validar contenidos.
                      td.texto-left Mantiene el control de calidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Organización de archivos
                      td.ajuste-border-tabla.texto-left Establecer una estructura de almacenamiento.
                      td.texto-left Evita pérdida o duplicidad de información.
          p.mb-0 Una administración organizada favorece la productividad, reduce reprocesos y facilita el crecimiento de la comunicación digital.
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Interacción y generación de #[i engagement]
          p.mb-5 Los formatos de publicación dinámica, como los estados y las historias temporales, permiten compartir información de manera ágil y fortalecer la interacción con las audiencias. Estos recursos son apropiados para comunicar novedades, recordatorios, promociones y mensajes de corta duración. Las principales estrategias para incrementar el engagement se presentan a continuación:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Estrategias para incrementar la interacción en medios digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Estrategia
                      th.ajuste-border-tabla.texto-left Aplicación
                      th.texto-left Resultado esperado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Publicaciones temporales
                      td.ajuste-border-tabla.texto-left Compartir novedades, recordatorios o campañas de corta duración.
                      td.texto-left Incrementa la visibilidad inmediata.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contenido participativo
                      td.ajuste-border-tabla.texto-left Utilizar encuestas, preguntas o dinámicas.
                      td.texto-left Favorece la interacción con la audiencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Llamados a la acción
                      td.ajuste-border-tabla.texto-left Invitar a comentar, participar o responder.
                      td.texto-left Estimula la participación de los usuarios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contenido de valor
                      td.ajuste-border-tabla.texto-left Compartir consejos, recomendaciones e información útil.
                      td.texto-left Fortalece el interés y la fidelización.
      p.mb-5 La diferencia entre una publicación informativa y una publicación orientada a la interacción se resume a continuación:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img11.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Comunica información
            p.mb-0.text-center Invita a la participación de la audiencia.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img12.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Predomina la comunicación unidireccional
            p.mb-0.text-center Favorece la conversación y el intercambio.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img13.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Genera menor interacción
            p.mb-0.text-center Incrementa el #[i engagement].
      p.mb-0 La adecuada administración de contenidos en línea permite mantener una comunicación organizada, fortalecer la presencia digital de la organización y generar relaciones más sólidas con las audiencias mediante estrategias de interacción planificadas.

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
