<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Publicación estratégica y propiedad intelectual
      p La publicación de contenidos digitales no se limita al diseño de piezas gráficas o a la redacción de mensajes. También requiere planificar la difusión de los contenidos, adaptarlos a las características de la audiencia y garantizar el cumplimiento de principios relacionados con la propiedad intelectual y el uso responsable de recursos digitales.
      p.mb-5 Cada publicación representa la imagen de la organización; por ello, debe responder a criterios de calidad, pertinencia, oportunidad y responsabilidad en el manejo de la información.
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Publicación de contenidos según la audiencia
      p.mb-5 La efectividad de una publicación depende de que el contenido llegue a la audiencia adecuada, en el momento oportuno y mediante el canal más apropiado. Para definir la estrategia de publicación es recomendable considerar los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img1.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Características de la audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar aspectos como la edad, intereses, necesidades, conocimientos y perfil de los usuarios para adaptar el lenguaje, el nivel de profundidad y el estilo del contenido. Esto favorece una mejor comprensión del mensaje y aumenta su relevancia para la audiencia.
            .row(titulo="Comportamiento digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identificar los hábitos de consumo de contenido, como los formatos preferidos, la frecuencia de uso de las plataformas y las formas de interacción. Esta información permite seleccionar el momento, el canal y el formato más adecuados para mejorar el impacto de las publicaciones.
            .row(titulo="Horarios de actividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinar los días y las horas en que la audiencia presenta un mayor nivel de actividad en las plataformas digitales. Publicar en estos periodos incrementa la visibilidad del contenido, favorece el alcance de las publicaciones y aumenta las posibilidades de interacción.
            .row(titulo="Plataforma utilizada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Adaptar el formato, el diseño, la extensión del mensaje y el estilo de comunicación según las características de cada canal digital. Esta adecuación permite ofrecer información más pertinente y mejorar la experiencia de los usuarios en cada plataforma.
            .row(titulo="Nivel de interacción esperado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definir el tipo de participación que se busca promover, como comentarios, reacciones, compartidos, registros o clics en enlaces. Establecer este objetivo facilita el diseño de estrategias y llamados a la acción que incentiven.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La adaptación también depende del tipo de público al que se dirige la comunicación.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Público general:] mensajes claros con recursos visuales.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Clientes potenciales:] contenido persuasivo orientado a la acción.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comunidad institucional:] información organizada y de carácter informativo.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Usuarios corporativos:] comunicación formal y estructurada.
      p.mb-0 Una misma organización puede requerir estrategias diferentes para cada audiencia, ajustando el diseño, el lenguaje, el tono, el formato y el canal de publicación.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Propiedad intelectual y uso responsable de contenidos digitales
      p.mb-5 La creación de contenidos digitales debe respetar los derechos de propiedad intelectual y las condiciones de uso de los recursos empleados en las publicaciones. Los principales recursos que requieren especial atención son los siguientes:
      TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Imágenes y fotografías")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Imágenes y fotografías
              p.mb-0 Utilizar recursos propios o autorizados.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t6/img3.svg", alt="" style="max-width: 190px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Videos y piezas audiovisuales")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Videos y piezas audiovisuales
              p.mb-0 Verificar las condiciones de uso antes de publicarlos.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t6/img4.svg", alt="" style="max-width: 190px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Textos")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Textos
              p.mb-0 Respetar la autoría y las licencias correspondientes.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t6/img5.svg", alt="" style="max-width: 190px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Logotipos y elementos gráficos")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Logotipos y elementos gráficos
              p.mb-0 Utilizar únicamente aquellos cuyo uso esté autorizado.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t6/img6.svg", alt="" style="max-width: 190px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Música")
          .row.align-items-center
            .col-lg.order-1.mb-4.mb-lg-0
              h4 Música
              p.mb-0 Confirmar que la licencia permita su utilización.
            .col-lg-auto.order-2
              figure
                img(src="@/assets/curso/temas/t6/img7.svg", alt="" style="max-width: 190px").m-auto
      p.mb-5 Cuando sea necesario utilizar recursos de terceros, es recomendable acudir a plataformas que ofrecen contenidos con licencias de uso adecuadas.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img8.png', alt="" ).m-auto
              h4.text-center Unsplash
              .caja-7_p
                p.mb-0.text-center Fotografías.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img9.png', alt="" ).m-auto
              h4.text-center Pexels
              .caja-7_p
                p.mb-0.text-center Imágenes y videos.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img10.png', alt="" ).m-auto
              h4.text-center Pixabay
              .caja-7_p
                p.mb-0.text-center Recursos gráficos y audiovisuales.
        .col-xl-3.col-md-9(data-aos="fade-left")
          .caja-7.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img11.png', alt="" ).m-auto
              h4.text-center Recursos institucionales
              .caja-7_p
                p.mb-0.text-center Material autorizado por la organización.
      p.mb-5 Para reducir riesgos legales y fortalecer la gestión responsable de los contenidos, es recomendable aplicar las siguientes prácticas:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span 1
              | 
              p.mb-0 #[b Verificar las licencias de uso] 
          p.ajuste_p Evita el uso indebido de recursos protegidos.
          hr
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 2
              | 
              p.mb-0 #[b Utilizar contenidos autorizados] 
          p.ajuste_p Reduce riesgos legales.
          hr
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 3
              | 
              p.mb-0 #[b Respetar la autoría] 
          p.ajuste_p Fortalece las buenas prácticas éticas.
          hr
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 4
              | 
              p.mb-0 #[b Documentar las fuentes cuando corresponda] 
          p.ajuste_p Facilita la trazabilidad de los recursos utilizados.
          hr
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img12.png', alt='').m-auto
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Buenas prácticas para la publicación empresarial
      p.mb-5 La calidad de una publicación también depende de los controles realizados antes de su difusión. Los principales aspectos que deben verificarse se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Contenido")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contenido
              p.mb-0 Revisar la ortografía, la gramática, la coherencia, la claridad y la exactitud de la información antes de publicar. Esta verificación reduce errores, mejora la comprensión del mensaje y fortalece la credibilidad de la organización frente a la audiencia.
        .py-3.py-md-4(titulo="Diseño")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Diseño
              p.mb-0 Validar la calidad visual de la publicación, el uso adecuado de imágenes, colores, tipografías y demás elementos gráficos, asegurando el cumplimiento de la identidad institucional. Un diseño consistente fortalece la imagen de la organización y facilita el reconocimiento de la marca.
        .py-3.py-md-4(titulo="Propósito")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Propósito
              p.mb-0 Confirmar que la publicación responda a un objetivo previamente definido, como informar, promocionar, educar o generar interacción. Esta verificación garantiza que el contenido esté alineado con la estrategia de comunicación y contribuya al logro de los resultados esperados.
        .py-3.py-md-4(titulo="Adaptación para dispositivos móviles")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Adaptación para dispositivos móviles
              p.mb-0 Comprobar que el contenido se visualice correctamente en teléfonos móviles, tabletas y computadores, verificando la legibilidad de los textos, el tamaño de las imágenes y el funcionamiento de enlaces o botones. Esto mejora la experiencia del usuario y favorece el acceso al contenido desde diferentes dispositivos.
      .bg-1
        .px-5
          p.mb-5 Como apoyo al proceso puede utilizarse la siguiente lista de verificación:
          .row.justify-content-center.mb-0
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Lista de verificación para la revisión final de contenidos digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Verificación
                      th.texto-left Estado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mensaje claro
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diseño validado
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información correcta
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Coherencia institucional
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Adaptación para dispositivos móviles
                      td.texto-left Sí / No
          Separador
          #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.4 Evaluación y mejora de contenidos publicados
          p.mb-5 La publicación de un contenido constituye el inicio del proceso de seguimiento. Analizar los resultados permite identificar oportunidades de mejora y optimizar las futuras estrategias de comunicación. Los principales indicadores de evaluación son los siguientes:
          .bg-carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t6/img17.png', alt='' style="max-width: 350px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img18.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Alcance
                      p.mb-0.text-center Número de personas impactadas.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img19.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Interacciones
                      p.mb-0.text-center Participación de la audiencia.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img20.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Clics
                      p.mb-0.text-center Interés generado por el contenido.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img21.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Mensajes recibidos
                      p.mb-0.text-center Nivel de respuesta de los usuarios.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t6/img22.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Compartidos
                      p.mb-0.text-center Valor que la audiencia atribuye a la publicación.
              p.mb-5 La interpretación de estos indicadores facilita la toma de decisiones para mejorar el desempeño de las publicaciones.
              .row.justify-content-center.mb-5
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Tabla 11.
                    span Interpretación de resultados en la evaluación de contenidos digitales
                  .tabla-a(data-aos="zoom-in")
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Resultado observado
                          th.ajuste-border-tabla.texto-left Posible interpretación
                          th.texto-left Acción recomendada
                      tbody
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold Alto alcance y baja interacción
                          td.ajuste-border-tabla.texto-left El contenido fue visible, pero poco atractivo para la audiencia.
                          td.texto-left Ajustar el formato, el mensaje o el llamado a la acción.
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold Alta interacción y múltiples consultas
                          td.ajuste-border-tabla.texto-left El contenido respondió al interés de la audiencia.
                          td.texto-left Reforzar este tipo de publicaciones.
      p.mb-5 La mejora continua puede desarrollarse mediante un proceso sistemático: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisar métricas
                  p.mb-0 Analizar indicadores como alcance, impresiones, clics, reacciones, comentarios, compartidos y tasa de interacción para evaluar el desempeño de las publicaciones. Este análisis permite identificar fortalezas, detectar oportunidades de mejora y fundamentar la toma de decisiones con base en los resultados obtenidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparar publicaciones
                  p.mb-0 Evaluar el rendimiento de diferentes contenidos considerando aspectos como formato, tema, horario de publicación y nivel de interacción. Esta comparación facilita la identificación de las estrategias más efectivas y contribuye a replicar las prácticas que generan mejores resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificar oportunidades
                  p.mb-0 Analizar tendencias, horarios de mayor actividad, formatos con mejor desempeño y características de los mensajes para reconocer oportunidades de optimización. Esta información permite planificar futuras publicaciones con mayores probabilidades de alcanzar los objetivos establecidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ajustar la estrategia
                  p.mb-0 Incorporar las mejoras identificadas a partir del análisis de resultados, modificando aspectos como el contenido, el formato, la frecuencia de publicación o los canales utilizados. Estos ajustes favorecen una comunicación digital más efectiva y un mejor cumplimiento de los objetivos de la estrategia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img26.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 La publicación estratégica, el respeto por la propiedad intelectual y la evaluación permanente de los resultados contribuyen a fortalecer la comunicación empresarial mediante contenidos responsables, pertinentes y alineados con las necesidades de la audiencia y los objetivos institucionales.
              
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
