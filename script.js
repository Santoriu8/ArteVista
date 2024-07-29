document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          "<h1>Bienvenidos a nuestra red</h1><p>Disfruta de una experiencia artística inolvidable.</p> <img src='images.jpg' alt=''> <img src=imagesa.jpg>";
        break;
      case "navegador":
        mainContent.innerHTML =
          `<h1>Navegador</h1><p>Descubre las obras de nuestros usuarios. 
          ¡Todas las formas de arte son diferentes, valora tus pensamientos!
          </p> <video controls><source src='video..mp4'type='video/mp4' <video>`;
          
        break;
      case "about":
        mainContent.innerHTML =
        `<div style="background-image: url('imagesc.jpg'); background-size: cover; background-position: center; padding: 20px;">
        <h1>Sobre Nosotros</h1>
        <p style="line-height: 1.6; background-color: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 10px;">
          Conoce más sobre nuestra historia. 
          ArteVista nació de la creencia fundamental de que el arte tiene el poder de inspirar, educar y conectar a las personas de todas las culturas y orígenes. Desde sus inicios, la misión de ArteVista ha sido proporcionar una plataforma inclusiva y accesible donde artistas emergentes y establecidos puedan exhibir sus obras, mientras que los aficionados al arte pueden explorar y adquirir piezas significativas para enriquecer sus vidas.
        </p>
      </div>`       
       break;
      case "contact":
        mainContent.innerHTML =
        `<h1>Contacto</h1>
        <p>Ponte en contacto con nosotros a través de los siguientes medios:</p>
        <table border="1" style="width: 80%; border-collapse: collapse;">
          <tr>
            <th style="padding: 10px; text-align: left;">Medio de Contacto</th>
            <th style="padding: 10px; text-align: left;">Detalles</th>
          </tr>
          <tr>
            <td style="padding: 10px;">Correo Electrónico</td>
            <td style="padding: 10px;">infoartevista@gmail.com</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Teléfono</td>
            <td style="padding: 10px;">+57 301 543 3563</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Dirección</td>
            <td style="padding: 10px;">Calle 19, Concordia, Antioquia</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Redes Sociales</td>
            <td style="padding: 10px;">
              <a href="https://facebook.com/artevista" target="_blank">Facebook</a><br>
              <a href="https://twitter.com/artevista" target="_blank">Twitter</a><br>
              <a href="https://instagram.com/artevista" target="_blank">Instagram</a>
            </td>
          </tr>
        </table>`;         
          
        break;
        case "formasPago":
        mainContent.innerHTML =
        `<h1>Formas de pago</h1>
        <p>Estas son nuestras formas de pago:</p>
        <table border="1" style="width: 80%; border-collapse: collapse;">
          <tr>
            <th style="padding: 10px; text-align: left;">Método de Pago</th>
            <th style="padding: 10px; text-align: left;">Descripción</th>
          </tr>
          <tr>
            <td style="padding: 10px;">Tarjeta de crédito</td>
            <td style="padding: 10px;">Aceptamos Visa, MasterCard y American Express</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Tarjeta de débito</td>
            <td style="padding: 10px;">Aceptamos todas las tarjetas de débito principales</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Nequi</td>
            <td style="padding: 10px;">Transferencias desde la aplicación Nequi</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Bancolombia</td>
            <td style="padding: 10px;">Transferencias desde cuentas Bancolombia</td>
          </tr>
        </table>`
        break;

        break;
        case "ubicacion":
        mainContent.innerHTML =
        `<h1>Ubicación</h1>
        <p>Estas son nuestras ubicaciones:</p>
        <table border="1" style="width: 80%; border-collapse: collapse;">
          <tr>
            <th style="padding: 10px; text-align: left;">Sedes</th>
            <th style="padding: 10px; text-align: left;">Descripción</th>
          </tr>
          <tr>
            <td style="padding: 10px;">Calle 44 #19-08</td>
            <td style="padding: 10px;">Pregunta por Tatiana</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Carrera 18 #17-06</td>
            <td style="padding: 10px;">Pregunta por Sebastián</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Vereda Yarumal</td>
            <td style="padding: 10px;">Pregunta por Mariana</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Carrera 20 #49-07</td>
            <td style="padding: 10px;">Pregunta por Matías</td>
          </tr>
        </table>`
        break;

    }
  }
});
