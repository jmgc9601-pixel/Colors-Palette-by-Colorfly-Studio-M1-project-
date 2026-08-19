# ✨ Colorfly Studio — Generador de Paletas

Generador de paletas de colores aleatorias desarrollado con **HTML, CSS y JavaScript**.

La aplicación permite generar paletas de **6, 8 o 9 colores**, mostrando cada color en una tarjeta individual. Además, permite alternar entre los formatos **HEX** y **HSL**.

## 🌐 Demo

El proyecto está desplegado mediante GitHub Pages.

👉 [Probar Colorfly Studio](https://jmgc9601-pixel.github.io/Colors-Palette-by-Colorfly-Studio-M1-project-/)
---

## 🎨 Características

* Generación aleatoria de paletas de colores.
* Selección entre paletas de:

  * 6 colores
  * 8 colores
  * 9 colores
* Visualización de los colores mediante tarjetas interactivas.
* Efecto visual de elevación al pasar el cursor sobre las tarjetas.
* Visualización del código de color en formato **HEX**.
* Conversión de HEX a **HSL**.
* Interruptor para cambiar entre HEX y HSL.
* Mensajes de feedback al usuario al generar una paleta o cambiar de formato.
* Diseño responsive para dispositivos móviles.
* Interfaz desarrollada completamente con HTML y CSS.
* Generación dinámica de elementos mediante JavaScript.

---

## 🛠️ Tecnologías utilizadas

### HTML5

Utilizado para construir la estructura semántica de la aplicación:

* `header`
* `main`
* `section`
* `footer`
* Formularios y controles interactivos

### CSS3

Utilizado para el diseño y la adaptación responsive:

* CSS Grid
* Flexbox
* Media Queries
* HSL
* Transiciones
* Diseño responsive
* Estilos personalizados para las tarjetas de color

### JavaScript

Utilizado para toda la lógica de la aplicación:

* Generación de colores aleatorios
* Manipulación del DOM
* Eventos `click` y `change`
* Conversión HEX → HSL
* Creación dinámica de tarjetas
* Gestión del feedback visual

---

## 📂 Estructura del proyecto

```text
Colorfly-Studio/
│
├── index.html
│
└── ASSETS_PALETA/
    │
    ├── colorfly-logo.png
    │
    ├── CSS/
    │   └── STYLE_PALETA.css
    │
    └── JavaScript/
        └── APP_PALETA.js
```

---

## 🚀 Instalación y ejecución

No es necesario instalar dependencias ni utilizar un servidor.

### 1. Clonar el repositorio

git clone https://github.com/jmgc9601-pixel/Colors-Palette-by-Colorfly-Studio-M1-project-.git

### 2. Entrar en la carpeta del proyecto

cd Colors-Palette-by-Colorfly-Studio-M1-project-

### 3. Abrir el proyecto

Abre el archivo index.html en cualquier navegador web moderno.

También puedes utilizar Live Server en Visual Studio Code durante el desarrollo.


## ⚙️ Decisiones técnicas

- Se utilizó HTML, CSS y JavaScript vanilla para mantener el proyecto simple y sin dependencias externas.
- Se eligió HEX como formato base para generar los colores.
- Se implementó una conversión HEX → HSL para permitir alternar entre ambos formatos.
- Se utilizó CSS Grid para adaptar dinámicamente la distribución según el tamaño de la paleta.
- Se utilizó `aria-live="polite"` para comunicar el feedback y `:focus-visible` para mejorar la navegación mediante teclado.
- Se incorporó `transform: translateY()` junto con transiciones CSS para proporcionar un efecto visual de elevación al interactuar con las tarjetas.


## 🤖 Uso de IA

Durante el desarrollo del proyecto se utilizó IA como herramienta de apoyo para:

- Analizar la consigna y convertirla en requisitos funcionales.
- Revisar la estructura semántica del HTML.
- Revisar aspectos básicos de accesibilidad.
- Analizar y mejorar la lógica JavaScript.
- Revisar la implementación de generación de colores HSL y HEX.
- Revisar el proyecto contra los criterios de la rúbrica.

### Evidencias

Se incluyen capturas de las consultas realizadas y de las recomendaciones obtenidas durante el proceso de desarrollo.

## 🖌️ ¿Cómo funciona?

### 1. Seleccionar el tamaño

El usuario puede elegir el número de colores que quiere generar:

```text
6 Colores
8 Colores
9 Colores
```

Al pulsar **"Generar paleta"**, JavaScript obtiene el valor seleccionado y configura dinámicamente el número de columnas de la cuadrícula.

---

### 2. Generación de colores

Los colores se generan de forma aleatoria utilizando los caracteres hexadecimales:

```text
0123456789ABCDEF
```

JavaScript selecciona aleatoriamente seis caracteres para construir un color HEX.

Por ejemplo:

```text
#3FA7D6
#E84A5F
#21B573
```

Cada color generado se almacena en el array:

```javascript
let coloresActuales = [];
```

Esto permite conservar los colores originales aunque el usuario cambie posteriormente entre HEX y HSL.

---

### 3. Creación de las tarjetas

Cada color genera dinámicamente una tarjeta mediante JavaScript.

La estructura creada es equivalente a:

```html
<div class="tarjeta">
    <div class="zona-color"></div>
    <p>#3FA7D6</p>
</div>
```

La zona superior utiliza el color generado como fondo y debajo se muestra su código correspondiente.

---

## 🔄 HEX y HSL

La aplicación permite cambiar la representación del color mediante el interruptor **HSL**.

Cuando está desactivado:

```text
#3FA7D6
```

Cuando está activado:

```text
hsl(198, 66%, 54%)
```

La conversión se realiza mediante la función:

```javascript
hexToHsl(hex)
```

Esta función obtiene los valores RGB del color HEX y posteriormente calcula sus valores:

* Hue
* Saturation
* Lightness

El fondo de cada tarjeta continúa utilizando el color HEX original.

---

## 📱 Diseño responsive

El proyecto incorpora una media query para adaptar la interfaz a pantallas de hasta **600px** de ancho.

En dispositivos móviles:

* Las paletas pasan a una sola columna.
* El encabezado se reorganiza verticalmente.
* El tamaño del logo se reduce.
* Los títulos se adaptan a pantallas pequeñas.
* Los botones y selectores se reducen.
* Se añade separación entre los controles.
* Las zonas de color reducen su altura.
* El contenido se centra.

Ejemplo:

```css
@media (max-width: 600px) {
    .container-paleta.grid-6,
    .container-paleta.grid-8,
    .container-paleta.grid-9 {
        grid-template-columns: 1fr;
    }
}
```

---

## 💬 Feedback de usuario

La aplicación proporciona mensajes temporales cuando ocurre una acción.

Por ejemplo:

```text
¡Paleta generada!
```

o:

```text
Formato HSL activado
```

También informa cuando se vuelve al formato HEX:

```text
Formato HEX activado
```

Estos mensajes aparecen mediante la clase CSS:

```css
.microfeedback.visible
```

y desaparecen automáticamente después de unos segundos.

---

## ♿ Accesibilidad

Se han incluido algunos detalles para mejorar la accesibilidad y navegación mediante teclado.

Los elementos interactivos muestran un indicador visual cuando reciben `focus`:

```css
outline: 3px solid hsl(189, 100%, 50%);
```

Además, el mensaje de feedback utiliza:

```html
aria-live="polite"
```

para permitir que los cambios de estado puedan ser comunicados adecuadamente por tecnologías de asistencia.

---

## 🌐 Tipografía

El título principal utiliza la fuente **The Nautigal**, cargada desde Google Fonts.

La fuente se utiliza para darle una identidad visual más artística relacionada con el concepto de Colorfly Studio.

---

## 🔮 Posibles mejoras futuras

Algunas funcionalidades que podrían incorporarse en futuras versiones:

* Copiar un color al portapapeles haciendo clic sobre él.
* Descargar una paleta como imagen.
* Guardar paletas favoritas.
* Generar colores a partir de una imagen.
* Añadir más formatos como RGB, RGBA o CMYK.
* Permitir introducir manualmente un color base.
* Generar paletas complementarias, análogas o monocromáticas.
* Añadir un botón para bloquear colores individuales.
* Permitir compartir una paleta mediante un enlace.

---

## 👨‍💻 Autor

**Juan Garcia**

Proyecto desarrollado como parte de la formación **Cohorte WebFT78**.

🔗 [GitHub](https://github.com/jmgc9601-pixel)

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y de práctica.
