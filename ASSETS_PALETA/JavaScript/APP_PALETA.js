const selector = document.getElementById("selector");
const boton = document.querySelector("button");
const caracteres = "0123456789ABCDEF";
const contenedor = document.querySelector(".container-paleta");

selector.addEventListener("change", () => {
    const valor = selector.value;
    console.log(valor);
});

boton.addEventListener("click" , () => {
    const valor = selector.value;
    const cantidad = parseInt(valor);
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
        const zonaColor = document.createElement("div");
        const textoColor = document.createElement("p");   

        zonaColor.className = "zona-color";

        zonaColor.style.backgroundColor = color;
        textoColor.textContent = color;

        tarjeta.appendChild(zonaColor);
        tarjeta.appendChild(textoColor);
        contenedor.appendChild(tarjeta);
    }
    });
