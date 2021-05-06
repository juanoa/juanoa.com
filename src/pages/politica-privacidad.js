import React from "react"

import Layout from "../components/structure/layout"
import Seo from "../components/structure/seo"

const PrivacyPolicyPage = () => (
  <Layout>
    <Seo title="Política de privacidad" index={false} />
    <div className="page-content">
      <h1>Política de privacidad</h1>
        <h2>1. Quiénes somos</h2>
        <p>La dirección de la web es: https://juanoa.com. Está página es mantenida por Juan Otálora Alarcón.</p>
        <h2>2. Qué datos personales recogemos y por qué los recogemos</h2>
        <h3>2.1. Comentarios</h3>
        <p>Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de
          comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para
          ayudar a la detección de spam.</p>
        <p>Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada hash) puede ser
          proporcionada al servicio de Gravatar para ver si la estás usando. La política de privacidad del servicio
          Gravatar está disponible aquí: https://automattic.com/privacy/. Después de la aprobación de tu comentario, la
          imagen de tu perfil es visible para el público en el contexto de su comentario.</p>
        <h3>2.2. Medios</h3>
        <p>Si subes imágenes a la web deberías evitar subir imágenes con datos de ubicación (GPS EXIF) incluidos. Los
          visitantes de la web pueden descargar y extraer cualquier dato de localización de las imágenes de la web.</p>
        <h3>2.3. Formularios de contacto</h3>
        <div>A través de la página de contacto se manda un correo electrónico con los datos especificados en dicho
          formulario a una dirección de correo personal y no se distribuye ni se reenvía bajo ningún concepto.
        </div>
        <h3>2.4. Cookies</h3>
        <p>Utilizamos cookies para facilitar el uso de nuestra página web. <strong>Las cookies son pequeños ficheros de
          información que nos permiten comparar y entender cómo nuestros usuarios navegan a través de nuestra página
          web, y de esta manera poder mejorar consecuentemente el proceso de navegación</strong>. Las cookies que
          utilizamos no almacenan dato personal alguno, ni ningún tipo de información que pueda identificarle. En caso
          de no querer recibir cookies, por favor configure su navegador de Internet para que las borre del disco duro
          de su ordenador, las bloquee o le avise en caso de instalación de las mismas. Para continuar sin cambios en la
          configuración de las cookies, simplemente continúe en la página web. Puedes obtener más información sobre las
          cookies y su uso en www.aboutcookies.org. Los tipos de cookies que utilizamos:</p>
        <h4>2.4.1. Cookies estrictamente necesarias:</h4>
        <p>Estas cookies son necesarias para el correcto uso de la página web, permitiendo el acceso a secciones que
          cuentan con filtros de seguridad. Sin estas cookies, muchos de los servicios disponibles no estarían
          operativos.</p>
        <h4>2.4.2. Cookies de navegación:</h4>
        <p>Estas cookies recogen información sobre el uso que las visitas hacen de la web, por ejemplo páginas vistas,
          errores de carga… Es información genérica y anónima, donde no se incluyen datos personales, ni se recoge
          información que identifique a los visitantes; siendo el objetivo último mejorar el funcionamiento de la web.
          Al visitar nuestra página web, acepta la instalación de estas cookies en su dispositivo.</p>
        <h4>2.4.3. Cookies funcionales:</h4>
        <p>Estas cookies permiten recordar información (como su nombre de usuario, idioma o la región en la que se
          encuentra) y características más personales. Por ejemplo, la posibilidad de ofrecer contenido personalizado
          basado en la información y criterios que hayas proporcionado voluntariamente. Estas cookies también pueden
          utilizarse para recordar los cambios realizados en el tamaño del texto, fuentes y otras partes personalizables
          de la página web. También se utilizan para ofrecer algunos servicios solicitados, como ver un video o comentar
          en un blog. La información que recopilan estas cookies puede ser anónima y no podrá ser seguida su actividad
          en otras páginas web. Al visitar nuestra página web, aceptas la instalación de estas cookies en tu
          dispositivo.</p>
        <h4>2.4.4. Cómo administrar las cookies en los navegadores:</h4>
        <p>Si quieres permitir el uso de cookies de nuestro site, por favor sigue las siguientes instrucciones.</p>
        <h5>Google Chrome</h5>
        <ol>
          <li>Al abrir el navegador, pincha “herramientas” en la parte superior y selecciona la pestaña de “opciones”.
          </li>
          <li>Dentro de opciones, pincha “privacidad”.</li>
          <li>Marca “permitir la administración de cookies”.</li>
        </ol>
        <h5>Microsoft Internet Explorer 6.0, 7.0, 8.0, 9.0</h5>
        <ol>
          <li>Al abrir el navegador, pincha “herramientas” en la parte superior y selecciona la pestaña de “opciones”.
          </li>
          <li>Revisa la pestaña de “Privacidad” asegurándote está configurada con un nivel de seguridad medio o
            inferior.
          </li>
          <li>Si la configuración de Internet no es media se estarán bloqueando las cookies.</li>
        </ol>
        <h5>Mozilla Firefox</h5>
        <ol>
          <li>Al abrir el navegador, pincha “herramientas” en la parte superior y selecciona la pestaña de “opciones”.
          </li>
          <li>Selecciona el icono de Privacidad.</li>
          <li>Pincha en cookies, y marca: “permitir la instalación de cookies”.</li>
        </ol>
        <h5>Safari</h5>
        <ol>
          <li>Al abrir el navegador, pincha “herramientas” en la parte superior y selecciona la pestaña de “opciones”.
          </li>
          <li>Pincha en la pestaña de “Seguridad” y revisa si la opción “Bloquear el acceso de cookies de terceros” está
            marcada o no.
          </li>
          <li>Pincha en “guardar”.</li>
        </ol>
        <h4>2.4.5. La instalación de cookies en Mac</h4>
        <p>Si tienes un Mac y quieres permitir el acceso de nuestras cookies en tu ordenador, por favor sigue las
          siguientes instrucciones:</p>
        <h5>Microsoft Internet Explorer 5.0 en OSX</h5>
        <ol>
          <li>Entra en “Explorer” y selecciona “Preferencias” en la barra de navegación.</li>
          <li>Haz scroll hacia abajo hasta que veas “Cookies” justo debajo de archivos recibidos.</li>
          <li>Marca “No volver a preguntar”.</li>
        </ol>
        <h5>Safari en OSX</h5>
        <ol>
          <li>Entra en Safari y selecciona “Preferencias” en la barra de navegación.</li>
          <li>Pincha en la pestaña de “Seguridad” y marcae la opción “aceptar cookies”.</li>
          <li>Selecciona la opción: “Sólo desde el site actual en que estoy navegando”</li>
        </ol>
        <h5>Mozilla y Netscape en OSX</h5>
        <ol>
          <li>Entra en “Mozilla” o “Netscape” y en la parte superior de tu navegador, marca la opción de
            “Preferencias”
          </li>
          <li>Haz scroll hacia abajo hasta que veas “Cookies” justo debajo de “Privacidad y Seguridad”.</li>
          <li>Marca la opción “Permitir el acceso de cookies sólo desde el site actual”</li>
        </ol>
        <h5>Opera</h5>
        <ol>
          <li>Entra en “Opera” y selecciona “Menu” y “Ajustes” en la barra de navegación.</li>
          <li>Selecciona “Preferencias” y pincha en la pestaña de “Avanzado”.</li>
          <li>Marca la opción “Aceptar cookies”.</li>
        </ol>
        <p>Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y
          web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes
          otro comentario. Estas cookies tendrán una duración de un año.</p>
        <p>Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu
          navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.</p>
        <p>Cuando inicias sesión, también instalaremos varias cookies para guardar tu información de inicio de sesión y
          tus opciones de visualización de pantalla. Las cookies de inicio de sesión duran dos días, y las cookies de
          opciones de pantalla duran un año. Si seleccionas «Recordarme», tu inicio de sesión perdurará durante dos
          semanas. Si sales de tu cuenta, las cookies de inicio de sesión se eliminarán.</p>
        <p>Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye
          datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.</p>
        <h3>2.5. Contenido incrustado de otros sitios web</h3>
        <p>Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos,
          etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante
          hubiera visitado la otra web.</p>
        <p>Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros,
          y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el
          contenido incrustado si tienes una cuenta y estás conectado a esa web.</p>
        <h3>2.6. Analítica</h3>
        <p>Utilizamos, como la mayoría de medios y páginas web, una herramienta de analíticas que corre de la mano de
          Google Analytics.</p>
        <h3>2.7. Newsletter</h3>
        <p>Recogemos tu correo electrónico y tu nombre para enviarte una posible newsletter semanal. Te puedes dar de
          baja en cualquier momento usando el enlace que aparece en los correos que te mande o mandando un correo
          electrónico a juan@juanoa.com con asunto «Dar de baja newsletter».</p>
        <h2>3. Con quién compartimos tus datos</h2>
        <p>Con nadie, todos tus datos quedan guardados para únicamente mejorar tu experiencia de usuario.</p>
        <h2>4. Cuánto tiempo conservamos tus datos</h2>
        <p>Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos
          reconocer y aprobar comentarios sucesivos automáticamente en lugar de mantenerlos en una cola de
          moderación.</p>
        <p>De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que
          proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal
          en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web
          también pueden ver y editar esa información.</p>
        <h2>5. Qué derechos tienes sobre tus datos</h2>
        <p>Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación
          de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También
          puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que
          estemos obligados a conservar con fines administrativos, legales o de seguridad.</p>
        <h2>6. Dónde enviamos tus datos</h2>
        <p>Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.</p>
        <p>Además, los datos introducidos para la suscripción de la newsletter se sincronizan con Mailchimp para el
          despliegue de las newsletters semanales.</p>
        <h2>7. Tu información de contacto</h2>
        <p>Puedes contactar con nosotros para cualquier duda sobre privacidad y cookies al correo electrónico
          juan@juanoa.com.</p>
        <h2>8. Información adicional</h2>
        <p>Información adicional sobre el uso de tus datos que te puede interesar.</p>
        <h3>8.1. Cómo protegemos tus datos</h3>
        <p>Tus datos están protegidos en bases de datos situados en servidores de alta seguridad localizados en
          España.</p>
        <h3>8.2. Qué procedimientos utilizamos contra las brechas de datos</h3>
        <p>En el caso de sufrir tal incidente, trataríamos de comunicarlo al máximo de afectados posibles, siempre que
          tengamos algún dato de contacto pertinente.</p>
        <h3>8.3. De qué terceros recibimos datos</h3>
        <p>De momento, no compramos ni recibimos ningún dato de tercero. Todos los datos a los que tenemos uso son los
          pertenecientes a&nbsp;<a href="https://juanoa.com" target="_blank" rel="noreferrer">Juan
            Otálora</a>&nbsp;Alarcón.</p>
        <p>Envío de newsletters a usuarios que únicamente han dado su consentimiento</p>
    </div>
  </Layout>
)

export default PrivacyPolicyPage
