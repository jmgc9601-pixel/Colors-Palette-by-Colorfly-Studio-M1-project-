const selector = document.getElementById("selector");
const boton = document.querySelector("button");
const caracteres = "0123456789ABCDEF";
const contenedor = document.querySelector(".container-paleta");
const feedback = document.querySelector(".microfeedback");

selector.addEventListener("change", () => {
    const valor = selector.value;
    console.log(valor);
});

boton.addEventListener("click" , () => {
    const valor = selector.value;
    const cantidad = parseInt(valor);
    contenedor.classList.remove("grid-6", "grid-8", "grid-9");
    contenedor.classList.add(`grid-${cantidad}`);
    contenedor.textContent = "";
    console.log(valor)
    console.log("Hiciste click")
    for (let i = 0; i < cantidad; i++) {
         const color = "#" + caracteres.charAt(Math.floor(Math.random() * 16)) + 
                      caracteres.charAt(Math.floor(Math.random() * 16)) + 
                      caracteres.charAt(Math.floor(Math.random() * 16)) + 
                      caracteres.charAt(Math.floor(Math.random() * 16)) + 
                      caracteres.charAt(Math.floor(Math.random() * 16)) + 
                      caracteres.charAt(Math.floor(Math.random() * 16));
                      console.log(color);

        const tarjeta = document.createElement("div");
         tarjeta.className = "tarjeta";
        const zonaColor = document.createElement("div");
        const textoColor = document.createElement("p");   

        zonaColor.className = "zona-color";

        zonaColor.style.backgroundColor = color;
        textoColor.textContent = color;

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

