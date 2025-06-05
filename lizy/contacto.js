document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formContacto");
  const mensajeEnvio = document.getElementById("mensajeEnvio");
  const verMensajesBtn = document.getElementById("verMensajesBtn");
  const mensajesGuardados = document.getElementById("mensajesGuardados");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !mensaje) {
      mensajeEnvio.textContent = "Por favor completá todos los campos.";
      mensajeEnvio.style.color = "orange";
      return;
    }

    // Guardar en localStorage
    const datos = { nombre, email, mensaje };
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
    mensajes.push(datos);
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    // Simular envío
    mensajeEnvio.textContent = "Mensaje enviado correctamente. ¡Gracias!";
    mensajeEnvio.style.color = "lightgreen";

    formulario.reset();
  });

  verMensajesBtn.addEventListener("click", function () {
    const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    if (mensajes.length === 0) {
      mensajesGuardados.innerHTML = "<p>No hay mensajes guardados.</p>";
      return;
    }

    mensajesGuardados.innerHTML = "<h3>Mensajes guardados:</h3>";

    mensajes.forEach((msg) => {
      const item = document.createElement("div");
      item.classList.add("mensaje-item");
      item.innerHTML = `
        <p><strong>Nombre:</strong> ${msg.nombre}</p>
        <p><strong>Email:</strong> ${msg.email}</p>
        <p><strong>Mensaje:</strong> ${msg.mensaje}</p>
        <hr>
      `;
      mensajesGuardados.appendChild(item);
    });
  });
});
