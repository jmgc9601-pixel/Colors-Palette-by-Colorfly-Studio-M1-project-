const selector = document.getElementById("selector");
const boton = document.querySelector("button");
const caracteres = "0123456789ABCDEF";
const contenedor = document.querySelector(".container-paleta");
const feedback = document.querySelector(".microfeedback");
const checkbox = document.getElementById("change-color");

let coloresActuales = [];


function hexToHsl(hex) {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const diferencia = max - min;

        s = l > 0.5
            ? diferencia / (2 - max - min)
            : diferencia / (max + min);

        switch (max) {
            case r:
                h = (g - b) / diferencia + (g < b ? 6 : 0);
                break;

            case g:
                h = (b - r) / diferencia + 2;
                break;

            case b:
                h = (r - g) / diferencia + 4;
                break;
        }

        h /= 6;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}


boton.addEventListener("click", () => {

    const valor = selector.value;
    const cantidad = parseInt(valor);

    contenedor.classList.remove("grid-6", "grid-8", "grid-9");
    contenedor.classList.add(`grid-${cantidad}`);

    contenedor.textContent = "";
    coloresActuales = [];

    for (let i = 0; i < cantidad; i++) {

        const color =
            "#" +
            caracteres.charAt(Math.floor(Math.random() * 16)) +
            caracteres.charAt(Math.floor(Math.random() * 16)) +
            caracteres.charAt(Math.floor(Math.random() * 16)) +
            caracteres.charAt(Math.floor(Math.random() * 16)) +
            caracteres.charAt(Math.floor(Math.random() * 16)) +
            caracteres.charAt(Math.floor(Math.random() * 16));

        // Guardamos el HEX original
        coloresActuales.push(color);

        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        const zonaColor = document.createElement("div");
        const textoColor = document.createElement("p");

        zonaColor.className = "zona-color";

        // El fondo siempre utiliza HEX
        zonaColor.style.backgroundColor = color;

        // Mostramos HEX o HSL según el selector
        if (checkbox.checked) {
            textoColor.textContent = hexToHsl(color);
        } else {
            textoColor.textContent = color;
        }

        tarjeta.appendChild(zonaColor);
        tarjeta.appendChild(textoColor);

        contenedor.appendChild(tarjeta);
    }

    feedback.textContent = "¡Paleta generada!";
    feedback.classList.add("visible");

    setTimeout(() => {
        feedback.classList.remove("visible");

        setTimeout(() => {
            feedback.textContent = "";
        }, 500);

    }, 2000);
});



checkbox.addEventListener("change", () => {

    const tarjetas = document.querySelectorAll(".tarjeta p");

    tarjetas.forEach((texto, index) => {

        if (checkbox.checked) {
            texto.textContent = hexToHsl(coloresActuales[index]);
        } else {
            texto.textContent = coloresActuales[index];
        }

    });

    if (checkbox.checked) {
        feedback.textContent = "Formato HSL activado";
    } else {
        feedback.textContent = "Formato HEX activado";
    }

    feedback.classList.add("visible");

    setTimeout(() => {
        feedback.classList.remove("visible");

        setTimeout(() => {
            feedback.textContent = "";
        }, 500);

    }, 2000);
});
