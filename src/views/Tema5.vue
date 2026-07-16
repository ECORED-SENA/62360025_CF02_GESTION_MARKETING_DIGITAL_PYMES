<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Posicionamiento y visibilidad del contenido digital
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-2.ajuste-1(data-aos="fade-right")
            p.mb-0 En los entornos digitales, crear contenido de calidad no garantiza que este llegue a la audiencia. La gran cantidad de información disponible hace necesario aplicar estrategias que mejoren la visibilidad de las publicaciones y faciliten que los usuarios encuentren los contenidos empresariales.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 70px")
          p.mb-0 El posicionamiento digital comprende el conjunto de acciones orientadas a fortalecer la presencia de una organización en medios digitales mediante la optimización de contenidos, el análisis de resultados y la adecuada organización de la información.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Herramientas y estrategias de posicionamiento digital
      p.mb-5 Las herramientas de posicionamiento permiten analizar el desempeño de los contenidos, identificar oportunidades de mejora y ajustar las estrategias de comunicación según el comportamiento de la audiencia. Las principales herramientas y sus aplicaciones se presentan a continuación:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t5/img2.png').m-auto
          h4.mb-3.estilo-text Google Trends
          p.mb-0.text-center Identificar tendencias de búsqueda para detectar los temas de mayor interés entre la audiencia.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t5/img3.png').m-auto
          h4.mb-3.estilo-text Google Search Console
          p.mb-0.text-center Analizar el desempeño de un sitio web mediante la revisión de su presencia y rendimiento en los resultados de búsqueda.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t5/img4.png').m-auto
          h4.mb-3.estilo-text Meta Business Suite
          p.mb-0.text-center Analizar el rendimiento de las publicaciones en Facebook e Instagram para medir el alcance, la interacción y la efectividad de las campañas.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t5/img5.png').m-auto
          h4.mb-3.estilo-text Instagram Insights
          p.mb-0.text-center Obtener métricas sobre publicaciones y audiencias para identificar los contenidos con mejor desempeño.
        .tarjeta.color-acento-botones.fit___card-sinbordes
          .row.justify-content-center.mb-4
            .col-12
              img(src='@/assets/curso/temas/t5/img6.png').m-auto
          h4.mb-3.estilo-text LinkedIn Analytics
          p.mb-0.text-center Analizar la actividad empresarial en LinkedIn para evaluar el comportamiento y el impacto de las publicaciones profesionales.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img7.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La información obtenida mediante estas herramientas permite fortalecer la estrategia de comunicación mediante acciones como:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Analizar el desempeño de las publicaciones:] identifica los contenidos con mejores resultados.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Detectar temas de interés:] facilita la creación de contenido pertinente.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Utilizar palabras clave y etiquetas:] incrementa la visibilidad del contenido.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Publicar en horarios de mayor actividad:] favorece el alcance de las publicaciones.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Ajustar las estrategias según las métricas:] mejora continuamente los resultados obtenidos.
      p.mb-5 El análisis de la audiencia constituye un complemento fundamental para optimizar el posicionamiento digital.
      TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Horarios de mayor actividad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Horarios de mayor actividad
              p.mb-0 Identificar los días y las horas en que la audiencia presenta un mayor nivel de actividad e interacción con las publicaciones. Este análisis permite programar el contenido en los momentos de mayor alcance y visibilidad, aumentando las probabilidades de obtener más reproducciones, clics, comentarios y reacciones.
        .py-3.py-md-4(titulo="Tipo de contenido")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tipo de contenido
              p.mb-0 Determinar cuáles formatos generan mejores resultados, como imágenes, videos, carruseles, infografías o publicaciones interactivas. La información obtenida facilita priorizar los formatos más efectivos para captar la atención del público y mejorar el rendimiento de la estrategia de comunicación.
        .py-3.py-md-4(titulo="Interacciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img10.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interacciones
              p.mb-0 Analizar indicadores como clics, reacciones, comentarios, compartidos, guardados y respuestas para evaluar el nivel de participación de la audiencia. Estos datos permiten identificar qué mensajes generan mayor interés y realizar ajustes que favorezcan una comunicación más efectiva.
        .py-3.py-md-4(titulo="Patrones de comportamiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Patrones de comportamiento
              p.mb-0 Identificar las preferencias, hábitos de consumo y formas de interacción de los usuarios con el contenido publicado. El análisis de estos patrones facilita adaptar los mensajes, seleccionar los canales más adecuados y optimizar la estrategia de comunicación para responder de manera más efectiva a las necesidades e intereses de la audiencia.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Optimización de contenidos mediante etiquetas y palabras clave
      p.mb-5 La optimización de contenidos consiste en aplicar recursos que faciliten la organización y localización de la información dentro de las plataformas digitales. Entre los elementos más utilizados se encuentran los siguientes:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img12.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center #[i Hashtags]
                  p.mb-0.text-center Agrupar contenidos relacionados; utilizar únicamente etiquetas pertinentes al tema de la publicación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t5/img13.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Palabras clave
                  p.mb-0.text-center Facilitar la localización del contenido; incorporarlas de forma natural en títulos y descripciones.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img14.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Categorías
                  p.mb-0.text-center Organizar la información por temas; mantener una clasificación coherente y consistente.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t5/img15.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Etiquetas temáticas
                  p.mb-0.text-center Relacionar contenidos similares; evitar el uso excesivo de etiquetas para no afectar la organización del contenido.
          p.mb-5 La optimización también requiere construir títulos y descripciones claros y relevantes: 
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .caja-8.mb-3(data-aos="flip-up").mb-3
                .row
                  .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/t5/img16.svg', alt='' style="width: 60px").m-auto
                  .col-xl.col-md-10
                    h5 Título
                    p.mb-0 Cambiar un título genérico como #[b "Nueva información importante"] por uno específico como #[b "Inscripciones abiertas para capacitación empresarial virtual"] para captar mejor la atención del público.
              .caja-8(data-aos="flip-up")
                .row
                  .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/temas/t5/img16.svg', alt='' style="width: 60px").m-auto
                  .col-xl.col-md-10
                    h5 Descripción
                    p.mb-0 Reemplazar una descripción general como #[b "Información general del evento"] por un texto más preciso como #[b "Conozca las fechas, los requisitos y el proceso de inscripción para la capacitación virtual"], facilitando la comprensión del contenido.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img17.png', alt='').m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img18.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Para mejorar la calidad de las publicaciones también es importante evitar algunos errores frecuentes:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Uso de etiquetas irrelevantes:] reduce la pertinencia del contenido.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Exceso de #[i hashtags]:] dificulta la lectura del mensaje.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Títulos ambiguos:] disminuyen el interés de la audiencia.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Descripciones poco claras:] limitan la comprensión del contenido.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Estructura y organización de contenidos web
      p.mb-5 Cuando una organización incorpora un sitio web dentro de su estrategia digital, la organización de la información influye directamente en la experiencia del usuario y en la localización de los contenidos. Los principales elementos que favorecen una estructura web organizada son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Menú principal
                  p.mb-0 Organizar las secciones y categorías del sitio web de manera clara y jerárquica para facilitar la navegación de los usuarios. Un menú bien estructurado permite localizar la información con mayor rapidez, mejora la experiencia de uso y reduce la posibilidad de confusión durante la consulta del contenido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estructura de contenidos
                  p.mb-0 Agrupar la información de forma lógica mediante categorías, subcategorías y páginas relacionadas. Esta organización facilita la búsqueda de información, mejora la comprensión de los contenidos y contribuye a que los usuarios encuentren con mayor facilidad los recursos o servicios que necesitan.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Accesibilidad
                  p.mb-0 Diseñar el sitio para que todas las personas, incluidas aquellas con algún tipo de discapacidad, puedan acceder y utilizar la información sin dificultades. La aplicación de criterios de accesibilidad mejora la experiencia del usuario, favorece la inclusión y amplía el alcance de los contenidos publicados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mapa de contenidos
                  p.mb-0 Organizar las páginas del sitio web y definir la relación entre ellas para establecer una estructura clara y coherente. Un mapa de contenidos facilita la planificación del sitio, mejora la navegación, optimiza la localización de la información y favorece una experiencia de usuario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Como ejemplo, un sitio web dedicado a servicios de capacitación podría organizar su contenido de la siguiente manera:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inicio
              p.mb-0.text-center Información general de la organización.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Programas de formación
              p.mb-0.text-center Oferta de cursos y capacitaciones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inscripciones
              p.mb-0.text-center Registro de participantes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Servicios
              p.mb-0.text-center Información sobre los servicios disponibles.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Noticias
              p.mb-0.text-center Novedades institucionales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Contacto
              p.mb-0.text-center Canales de atención y comunicación.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img29.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Una estructura desorganizada puede generar enlaces rotos, información duplicada y dificultades para localizar los contenidos. Para evitar estas situaciones, es recomendable aplicar las siguientes prácticas:
              br
              ul.fa-ul.mb-0
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Organizar los menús de forma lógica:] facilita la navegación.
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Mantener la información actualizada:] incrementa la credibilidad institucional.
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Verificar el funcionamiento de los enlaces:] garantiza el acceso al contenido.
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Optimizar la navegación en dispositivos móviles:] mejora la experiencia del usuario.
      p.mb-0 La aplicación de estrategias de posicionamiento y una adecuada organización de los contenidos contribuyen a incrementar la visibilidad de la información empresarial y fortalecen la presencia de la organización en los entornos digitales.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Captación y gestión estratégica de datos
      .row.justify-content-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p En los entornos digitales, cada interacción con los usuarios genera información que puede apoyar los procesos de comunicación, seguimiento y toma de decisiones de una organización. Formularios, registros de contacto, solicitudes de información e interacciones con campañas permiten recopilar datos que, cuando se administran de forma adecuada, fortalecen la relación con las audiencias.
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t5/img30.jpg', alt='').m-auto
              .col-xl.caja-1_p
                p.mb-0 La captación y gestión estratégica de datos comprende las actividades de recolección, organización, actualización, protección y utilización de la información, con el propósito de optimizar las estrategias de comunicación y facilitar la administración de los contactos.
        .col-xl-auto.col-md-9(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img31.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias para la captación de datos
      p.mb-5 La captación de datos consiste en recopilar información de usuarios interesados en los productos, servicios o contenidos de la organización. Una base de datos organizada facilita la segmentación de las comunicaciones y el seguimiento de las interacciones. Las principales estrategias para captar información se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img32.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Formularios digitales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recopilar información como nombre, correo electrónico, número de teléfono e intereses mediante formularios en línea. Estos datos permiten gestionar inscripciones, registros, solicitudes de información, descargas de contenidos y otras acciones de contacto de manera organizada y eficiente.
            .row(titulo="Páginas de registro (<em>landing pages</em>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Crear páginas específicas para captar información de personas interesadas en una campaña, producto, servicio o evento. Su utilización facilita el registro de participantes en cursos, seminarios web, promociones o actividades institucionales, además de mejorar la conversión de visitantes en contactos potenciales.
            .row(titulo="WhatsApp Business").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registrar datos de usuarios interesados a partir de conversaciones, consultas y solicitudes recibidas a través del canal de mensajería. Esta información facilita el seguimiento de clientes potenciales, fortalece la atención personalizada y mejora la gestión de las relaciones comerciales.
            .row(titulo="Correo electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Validar campañas, comunicados, anuncios o publicaciones institucionales mediante los procedimientos de revisión establecidos por la organización. Este proceso permite reducir errores, garantizar la coherencia de la información y mantener un mayor control sobre los contenidos antes de su difusión.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img33.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Para obtener mejores resultados, es recomendable aplicar las siguientes prácticas:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Solicitar únicamente la información necesaria:] mejora la experiencia del usuario.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Diseñar formularios claros:] incrementa la tasa de registros.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Explicar el propósito de la recolección:] genera confianza en la organización.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Organizar correctamente la información:] facilita su utilización posterior.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización y gestión de la información
      p.mb-5 Una vez recopilados los datos, es necesario clasificarlos y mantenerlos actualizados para que sean útiles en los procesos de comunicación. La información puede organizarse según diferentes criterios:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img34.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Tipo de usuario
              p.mb-0.text-center Clientes potenciales, usuarios institucionales o participantes en eventos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img35.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Interés
              p.mb-0.text-center Productos, servicios o temáticas de interés.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img36.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Canal de contacto
              p.mb-0.text-center Correo electrónico, WhatsApp o formularios web.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img37.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fecha de registro
              p.mb-0.text-center Seguimiento y actualización de la información.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img38.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Nivel de interacción
              p.mb-0.text-center Participación en campañas o respuesta a comunicaciones.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img39.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Para apoyar esta gestión pueden utilizarse diferentes herramientas.
              br
              ul.fa-ul.mb-0
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Microsoft Excel:] organización básica de registros.
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b Google Sheets:] gestión colaborativa de la información.
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  | 
                  p.mb-0 #[b CRM:] seguimiento estructurado de clientes y contactos.
      p.mb-5 Una administración organizada requiere actualizar periódicamente los registros, eliminar duplicados, clasificar la información y mantener una estructura documental que facilite su consulta.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consolidación y documentación de la información
      p.mb-5 En muchos procesos de comunicación, los datos provienen de diferentes fuentes, por lo que resulta necesario consolidarlos y documentarlos de manera organizada. El proceso puede desarrollarse mediante las siguientes etapas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificar las fuentes
                  p.mb-0 Localizar los formularios, correos electrónicos, registros digitales, hojas de cálculo o plataformas donde se almacena la información. Esta etapa permite disponer de los datos necesarios para iniciar el proceso de organización y garantizar que la información provenga de fuentes confiables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img40.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consolidar los datos
                  p.mb-0 Integrar la información recopilada en una única base de datos o repositorio centralizado. La consolidación facilita la administración de los registros, evita la dispersión de la información y mejora el acceso para su consulta y actualización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Depurar la información
                  p.mb-0 Revisar la base de datos para eliminar registros duplicados, corregir errores, completar datos faltantes y actualizar información desactualizada. Este proceso permite obtener una base de datos más precisa, confiable y útil para la toma de decisiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Clasificar los registros
                  p.mb-0 Organizar la información mediante categorías, etiquetas o segmentos, como ubicación, intereses, tipo de usuario o estado del registro. Esta clasificación facilita la consulta, el análisis de la información y el desarrollo de estrategias de comunicación más específicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Documentar el proceso
                  p.mb-0 Registrar las actividades realizadas, los criterios aplicados y las actualizaciones efectuadas mediante formatos o procedimientos estandarizados. La documentación fortalece la trazabilidad, facilita el control de la información y contribuye a mantener una gestión organizada de los datos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img44.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Por ejemplo, una organización puede consolidar en una única base de datos los registros obtenidos desde Instagram, formularios web y WhatsApp Business para facilitar el seguimiento de los usuarios interesados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img26.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad y manejo responsable de los datos
      p.mb-5 La gestión de la información debe realizarse de forma responsable para proteger los datos recopilados y preservar la confianza de los usuarios. Las principales medidas para fortalecer la seguridad de la información se presentan a continuación:
      .bg-3
        .px-5
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Control de acceso")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t5/img45.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Control de acceso
                  p.mb-0 Restringir el acceso a la información mediante permisos, perfiles de usuario o credenciales de autenticación para que únicamente las personas autorizadas puedan consultar o modificar los datos. Esta medida protege la información sensible y reduce el riesgo de accesos no autorizados.
            .py-3.py-md-4(titulo="Protección de archivos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t5/img46.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Protección de archivos
                  p.mb-0 Implementar mecanismos como contraseñas, almacenamiento seguro, cifrado y copias de respaldo periódicas para proteger los archivos digitales. Estas acciones disminuyen el riesgo de pérdida, alteración o eliminación de la información y favorecen su recuperación en caso de incidentes.
            .py-3.py-md-4(titulo="Uso responsable")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t5/img47.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Uso responsable
                  p.mb-0 Utilizar los datos personales y la información recopilada únicamente para los fines autorizados, respetando las políticas de privacidad y protección de datos. Esta práctica fortalece la confianza de los usuarios, promueve un manejo ético de la información y contribuye al cumplimiento de la normativa aplicable.
            .py-3.py-md-4(titulo="Actualización de registros")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t5/img48.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Actualización de registros
                  p.mb-0 Revisar y actualizar periódicamente la información para corregir errores, eliminar registros obsoletos e incorporar nuevos datos cuando sea necesario. Mantener la base de datos organizada y vigente mejora la calidad de la información y facilita la toma de decisiones basada en datos confiables.
          p.mb-5 Como apoyo al proceso, puede utilizarse una lista de verificación.
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Lista de verificación para la gestión segura de la información digital
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Verificación
                      th.texto-left Estado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información organizada
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registros actualizados
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acceso controlado
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Archivos protegidos
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Uso responsable definido
                      td.texto-left Sí / No
          p.mb-0 La captación y gestión estratégica de datos fortalece la comunicación empresarial, facilita la toma de decisiones y mejora la relación con las audiencias mediante el uso organizado y responsable de la información.

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
