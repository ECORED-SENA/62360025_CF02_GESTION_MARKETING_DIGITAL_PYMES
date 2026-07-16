<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Redacción y construcción de mensajes digitales
      .row.justify-content-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La efectividad de la comunicación digital empresarial depende en gran medida de la calidad de los mensajes que se transmiten. Aunque un diseño atractivo puede captar la atención inicial de la audiencia, el contenido escrito es el elemento que permite informar, orientar y motivar acciones concretas.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 Los mensajes digitales deben adaptarse al comportamiento de los usuarios en internet, donde el tiempo de atención suele ser limitado y la información compite constantemente con múltiples contenidos. Por esta razón, es necesario construir mensajes claros, directos, organizados y alineados con el propósito comunicativo de cada publicación.
        .col-xl-auto.col-md-9(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
      p.mb-0 Redactar contenido digital no consiste únicamente en escribir correctamente. También implica estructurar mensajes que transmitan una idea concreta, faciliten la comprensión de la información y promuevan la respuesta esperada por parte del usuario.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Técnicas de redacción para medios digitales
      p.mb-5 A continuación, se presenta una explicación sobre los principales elementos de la redacción digital, destacando las estrategias que permiten elaborar mensajes claros, organizados y efectivos para comunicar información de manera adecuada en los entornos digitales.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-5(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img3.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Elementos fundamentales de la redacción digital"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img4.png" ).m-auto
      .bg-1
        .px-5
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Técnicas prácticas de redacción digital
          p.mb-5 La aplicación de técnicas específicas permite mejorar la claridad, la organización y la efectividad de los mensajes en entornos digitales.
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Técnicas para mejorar la claridad en la redacción de mensajes digitales empresariales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Técnica
                      th.ajuste-border-tabla.texto-left Descripción
                      th.ajuste-border-tabla.texto-left Ejemplo menos efectivo
                      th.texto-left Ejemplo más efectivo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Escritura orientada a ideas principales
                      td.ajuste-border-tabla.texto-left La información más importante debe presentarse al inicio del mensaje para facilitar su comprensión.
                      td.ajuste-border-tabla.texto-left "Queremos informarle que durante los próximos días nuestra organización realizará algunos ajustes relacionados con el horario habitual de atención al cliente".
                      td.texto-left "Nuevo horario de atención desde el próximo lunes".
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Uso de lenguaje simple
                      td.ajuste-border-tabla.texto-left Los mensajes empresariales digitales deben evitar expresiones innecesariamente complejas o excesivamente técnicas.
                      td.ajuste-border-tabla.texto-left "Proceda a diligenciar el formulario correspondiente para la validación del requerimiento".
                      td.texto-left "Complete el formulario para registrar su solicitud".
          p.mb-0 La primera técnica permite que el usuario identifique rápidamente la información relevante, mientras que la segunda favorece la comprensión del mensaje y mejora la experiencia de lectura en entornos digitales.
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Producción de mensajes empresariales efectivos
          p.mb-5 Un mensaje empresarial efectivo no solo informa; también puede orientar, persuadir o motivar una acción específica. Para lograrlo, debe construirse de manera estratégica, considerando tanto los objetivos de comunicación como las características de la audiencia y del canal seleccionado. Antes de redactar un mensaje, es recomendable responder las siguientes preguntas:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img5.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center ¿Qué se quiere comunicar?
                  p.mb-0.text-center Define la información principal del mensaje.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center ¿A quién se dirige?
                  p.mb-0.text-center Permite adaptar el lenguaje y el formato.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center ¿Qué acción se espera?
                  p.mb-0.text-center Orienta el llamado a la acción.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img8.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center ¿Qué canal se utilizará?
                  p.mb-0.text-center Determina la forma de presentación del contenido.
      .bg-1
        .px-5
          p.mb-5 Una estructura sencilla puede facilitar la construcción de mensajes empresariales claros y efectivos:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Componentes básicos de un mensaje digital efectivo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Componente
                      th.ajuste-border-tabla.texto-left Función
                      th.texto-left Ejemplo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Apertura atractiva
                      td.ajuste-border-tabla.texto-left Capta la atención de la audiencia.
                      td.texto-left ¡Nueva promoción disponible!
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información principal
                      td.ajuste-border-tabla.texto-left Comunica el mensaje central.
                      td.texto-left Ahora puede solicitar asesoría personalizada de manera virtual.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor para el usuario
                      td.ajuste-border-tabla.texto-left Destaca el beneficio o la relevancia del contenido.
                      td.texto-left Ahorre tiempo y reciba atención desde cualquier lugar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Llamado a la acción
                      td.ajuste-border-tabla.texto-left Indica la acción que se espera del usuario.
                      td.texto-left Solicite información o escríbanos ahora.
          p.mb-5 A continuación, se presenta un ejemplo de aplicación de esta estructura:
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img9.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Nuevo servicio de atención virtual
              br
              p Ahora puede recibir asesoría personalizada sin desplazamientos. Nuestro equipo está disponible para atender sus consultas de manera rápida y segura.
              br
              h5 Contáctenos hoy mismo.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 Integración comunicativa entre plataformas digitales
          p.mb-5 Las organizaciones suelen utilizar diversos canales digitales para comunicarse con sus audiencias. Sin embargo, cada plataforma posee características, formatos y dinámicas de interacción diferentes. Por esta razón, un mismo mensaje debe adaptarse a cada medio sin perder coherencia en su propósito comunicativo. La adaptación del contenido según la plataforma favorece una comunicación más efectiva y una mejor experiencia para los usuarios.
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Instagram")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Instagram
                  p.mb-0 Comunicación visual, breve y atractiva mediante una imagen acompañada de un texto corto y un llamado a la acción.
            .py-3.py-md-4(titulo="Facebook")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Facebook
                  p.mb-0 Contenido informativo con mayor contexto, complementado con información ampliada y recursos adicionales.
            .py-3.py-md-4(titulo="WhatsApp")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 WhatsApp
                  p.mb-0 Mensaje directo y conversacional que comparte información puntual o un enlace de interés.
            .py-3.py-md-4(titulo="Correo electrónico")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Correo electrónico
                  p.mb-0 Comunicación formal y estructurada mediante invitaciones o comunicados con información detallada.
            .py-3.py-md-4(titulo="Sitio web")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Sitio web
                  p.mb-0 Información detallada y organizada con acceso a recursos, documentos o contenidos complementarios.
      p.mb-5 Por ejemplo, si una empresa desea promocionar un evento, el objetivo del mensaje se mantiene, pero la forma de presentación cambia según el canal utilizado. Para garantizar una adecuada integración comunicativa, es importante evitar prácticas que afectan la efectividad del contenido.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img15.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Copiar exactamente el mismo texto en todas las plataformas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce la pertinencia del mensaje.
            .row(titulo="Utilizar mensajes demasiado extensos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye el interés de la audiencia.
            .row(titulo="Ignorar las características de cada canal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Limita el alcance y la comprensión del contenido.
            .row(titulo="No adaptar el diseño o el tono").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Genera inconsistencias en la comunicación.
      p.mb-0 La integración comunicativa busca mantener coherencia institucional sin perder la adaptación necesaria para cada entorno digital.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Mensajes persuasivos y llamados a la acción
      .bg-1
        .px-5
          p Muchos contenidos empresariales buscan generar una respuesta por parte del usuario. Para ello, se emplean mensajes persuasivos y llamados a la acción que orientan la interacción y facilitan el logro de los objetivos comunicativos.
          p.mb-5 La persuasión digital no implica manipulación; consiste en destacar beneficios, generar interés y facilitar la toma de decisiones mediante una comunicación clara y orientada al usuario. Las principales técnicas utilizadas en los mensajes persuasivos se presentan a continuación:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Técnicas para aumentar el impacto de los mensajes digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Técnica
                      th.ajuste-border-tabla.texto-left Aplicación
                      th.ajuste-border-tabla.texto-left Ejemplo menos efectivo
                      th.texto-left Ejemplo más efectivo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Destacar beneficios
                      td.ajuste-border-tabla.texto-left Enfatiza el valor que recibe el usuario.
                      td.ajuste-border-tabla.texto-left Nuevo curso virtual disponible.
                      td.texto-left Aprenda nuevas habilidades desde cualquier lugar con nuestro curso virtual.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Crear sentido de oportunidad
                      td.ajuste-border-tabla.texto-left Motiva la acción en un periodo determinado.
                      td.ajuste-border-tabla.texto-left Curso disponible.
                      td.texto-left Cupos limitados o promoción vigente esta semana.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Generar cercanía
                      td.ajuste-border-tabla.texto-left Fortalece la relación con la audiencia.
                      td.ajuste-border-tabla.texto-left Atención disponible.
                      td.texto-left Estamos para ayudarle o reciba atención personalizada.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Incorporar llamados a la acción
                      td.ajuste-border-tabla.texto-left Indica claramente la acción esperada.
                      td.ajuste-border-tabla.texto-left Más información disponible.
                      td.texto-left Solicite información ahora.
          p.mb-5.text-center Los llamados a la acción deben ser directos, específicos y fáciles de identificar dentro del mensaje:
          .row.justify-content-center.mb-3
            .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t2/img16.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Llamado genérico
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Más información disponible
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Puede revisar nuestro contenido
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Si desea puede escribir
            .col-lg-4.col-md-9(data-aos="zoom-in")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t2/img17.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Llamado efectivo
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Solicite información ahora.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Descubra nuestros servicios aquí.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Escríbanos y reciba asesoría.
          .row.justify-content-center
            .col-lg-8
              .caja-6.p-4(data-aos="zoom-in")
                p.mb-0 La combinación de mensajes persuasivos y llamados a la acción fortalece la interacción con las audiencias y aumenta la efectividad de la comunicación digital empresarial.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
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
