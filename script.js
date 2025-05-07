function mostrarDato() {
    const datos = [
        "Alexander Calder fue uno de los pioneros del arte móvil cinético.",
        "El arte cinético puede usar viento, agua o motores para generar movimiento.",
        "Muchas obras cinéticas están hechas con materiales reciclados.",
        "El arte cinético busca conectar ciencia, física y estética visual."
    ];
    const elegido = datos[Math.floor(Math.random() * datos.length)];
    document.getElementById("dato").innerText = elegido;
}
