<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diseño y publicación de contenidos digitales empresariales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los conceptos clave relacionados con la comunicación estratégica, la creación, el diseño, la publicación y la administración de contenidos digitales empresariales en redes sociales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la comunicación estratégica en contenidos digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Planificar mensajes alineados con los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear publicaciones únicamente con fines comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la cantidad de seguidores en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicar contenido sin necesidad de planificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            '¿Cuál es el primer paso para planear un comunicado empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar la audiencia objetivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir el objetivo del comunicado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Seleccionar el canal digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar el mensaje principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            '¿Qué elemento define el estilo de comunicación institucional dentro del plan de comunicación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La frecuencia de publicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los canales prioritarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tono comunicativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La duración de las campañas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Qué aspecto debe adaptarse principalmente según la audiencia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La identidad corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los colores institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La frecuencia de publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El lenguaje y el formato del mensaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Qué característica favorece la comprensión inmediata de un mensaje digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar términos técnicos especializados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incluir información extensa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener claridad en la redacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incorporar múltiples ideas principales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 6,
          texto:
            '¿Qué componente de un mensaje digital busca captar la atención del usuario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La información principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El llamado a la acción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La apertura atractiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El valor para el usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            '¿Cuál es la principal característica de una publicación en Instagram?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar información muy detallada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar únicamente texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enviar documentos adjuntos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Combinar contenido visual con texto breve.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            '¿Qué busca un llamado a la acción dentro de un mensaje digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el tamaño del contenido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la información secundaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la interacción del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indicar la acción esperada por la audiencia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto:
            '¿Qué principio del diseño gráfico organiza los elementos según su importancia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El equilibrio visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La alineación gráfica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La jerarquía visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La distribución cromática.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto: '¿Qué práctica mejora la legibilidad de una pieza gráfica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar numerosos colores intensos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incluir varias tipografías distintas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar imágenes decorativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener un contraste adecuado entre fondo y texto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes herramientas se utiliza para diseñar piezas gráficas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Meta Business Suite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hootsuite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Canva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'WhatsApp Business.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto:
            '¿Qué debe verificarse antes de publicar un contenido digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de seguidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente la duración del texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ortografía, el diseño y los enlaces.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Qué estrategia facilita la organización de publicaciones futuras?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar campañas anteriores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Duplicar contenidos publicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programar un calendario de contenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Publicar únicamente contenido espontáneo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            '¿Qué herramienta permite administrar publicaciones en Facebook e Instagram?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Adobe Express.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Buffer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Google Trends.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Meta Business Suite.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto: '¿Cuál es el objetivo principal del posicionamiento digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las métricas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la visibilidad del contenido digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuir la interacción del público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 16,
          texto:
            '¿Qué recurso facilita la localización de contenidos en plataformas digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las imágenes decorativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los colores institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La tipografía corporativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las palabras clave y los hashtags.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            '¿Qué estrategia permite captar información de usuarios interesados?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicaciones temporales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Historias destacadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formularios digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mensajes automáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            '¿Cuál es una buena práctica para proteger la información recopilada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compartir libremente los registros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar todas las copias disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir acceso sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el acceso mediante permisos autorizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            '¿Qué debe respetarse al utilizar recursos digitales de terceros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el formato del archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tamaño de las imágenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los derechos de propiedad intelectual y las licencias de uso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La antigüedad del contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto:
            '¿Qué indicador permite conocer la participación de la audiencia en una publicación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del archivo publicado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de tipografías utilizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La duración del contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las interacciones generadas por la publicación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
