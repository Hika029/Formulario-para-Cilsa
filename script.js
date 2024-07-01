const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const pais = document.getElementById('pais').value;
    const correoElectronico = document.getElementById('correoElectronico').value;

    // Validación básica de los datos (opcional)

    // Envío de los datos (por ejemplo, a un servidor)
    console.log("Nombre:", nombre);
    console.log("Fecha de Nacimiento:", fechaNacimiento);
    console.log("País:", pais);
    console.log("Correo Electrónico:", correoElectronico);

    // Opcional: mostrar un mensaje de confirmación
    alert("Formulario enviado correctamente!");
});
