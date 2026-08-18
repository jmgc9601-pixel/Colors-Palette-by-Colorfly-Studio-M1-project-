# Colorfly Studio — Generador de Paletas de Colores

## Descripción

**Colorfly Studio** es una aplicación web sencilla e interactiva que permite generar paletas de colores aleatorias de forma rápida.

El usuario puede elegir entre generar una paleta de **6, 8 o 9 colores**. Al presionar el botón **"Generar paleta"**, la aplicación crea colores aleatorios en formato hexadecimal y los muestra visualmente mediante tarjetas.

El proyecto fue desarrollado utilizando **HTML, CSS y JavaScript**, sin necesidad de frameworks externos.

---

## Características

* Generación aleatoria de colores.
* Colores representados en formato hexadecimal (`#FFFFFF`).
* Selección de paletas de:

  * 6 colores.
  * 8 colores.
  * 9 colores.
* Visualización de cada color mediante una tarjeta.
* Muestra el código hexadecimal correspondiente a cada color.
* Mensaje de confirmación después de generar una paleta.
* Diseño responsive para dispositivos móviles.
* Interfaz con temática oscura.
* Estados de enfoque (`focus-visible`) para mejorar la accesibilidad mediante teclado.
* Uso de la fuente **The Nautigal** de Google Fonts.

---

## Tecnologías utilizadas

### HTML5

Se utiliza para crear la estructura de la aplicación:

* Encabezado.
* Selector de cantidad de colores.
* Botón para generar la paleta.
* Contenedor dinámico de las tarjetas.
* Pie de página.

### CSS3

Se utiliza para el diseño y presentación visual:

* CSS Grid.
* Diseño responsive mediante Media Queries.
* Colores HSL.
* Transiciones.
* Sombras.
* Bordes redondeados.
* Estados `:focus-visible`.
* Diseño adaptable para dispositivos móviles.

### JavaScript

Se utiliza para agregar la funcionalidad interactiva:

* Captura de eventos.
* Lectura del selector de cantidad de colores.
* Generación aleatoria de colores.
* Creación dinámica de elementos HTML.
* Manipulación de clases CSS.
* Mensajes de feedback para el usuario.

---

## Estructura del proyecto

COLORFLY-STUDIO/
│
├── README.md          
├── index.html
│
└── ASSETS_PALETA/
    ├── CSS/
    │   └── STYLE_PALETA.css
    │
    └── JavaScript/
        └── APP_PALETA.js

---

## Cómo ejecutar el proyecto

No es necesario instalar dependencias ni utilizar un servidor.

### 1. Descargar o clonar el proyecto

Descarga el proyecto en tu computadora o clona el repositorio.

### 2. Abrir el proyecto en Visual Studio Code

Abre la carpeta del proyecto desde **Visual Studio Code**.

### 3. Ejecutar `index.html`

Abre el archivo:

```text
index.html
```

Puedes ejecutarlo directamente en el navegador o utilizar una extensión como **Live Server** en Visual Studio Code.

---

## Funcionamiento

Al iniciar la aplicación, el usuario encuentra un selector donde puede elegir el tamaño de la paleta:

```text
6 Colores
8 Colores
9 Colores
```

Después de seleccionar una opción, debe presionar:

**Generar paleta**

JavaScript obtiene la cantidad seleccionada y genera aleatoriamente los caracteres necesarios para formar colores hexadecimales.

Por ejemplo:

```text
#A4F29C
#12BC7F
#D84A91
#F5C218
```

Cada color se muestra dentro de una tarjeta que contiene:

1. Una zona visual con el color generado.
2. El código hexadecimal del color.

---

## Generación de colores

Los colores se generan utilizando los caracteres hexadecimales:

```text
0123456789ABCDEF
```

JavaScript selecciona aleatoriamente seis caracteres para construir cada código de color.

La estructura resultante es:

```text
#RRGGBB
```

Por ejemplo:

```text
#3FA8D2
```

Cada vez que se presiona el botón se genera una nueva combinación aleatoria.

---

## Diseño Responsive

El proyecto incluye adaptación para dispositivos con pantallas pequeñas.

En pantallas de hasta **600px de ancho**, las tarjetas de colores pasan a mostrarse en una sola columna.

Además, se reduce el tamaño del título y la altura de las zonas de color para mejorar la visualización en dispositivos móviles.

---

## Accesibilidad

Se incorporaron estados `:focus-visible` para los elementos interactivos principales.

Cuando el usuario navega mediante teclado, los elementos seleccionables muestran un contorno de color para facilitar su identificación.

Los elementos que cuentan con este comportamiento son:

* Selector de colores.
* Botón para generar la paleta.
* Enlace de GitHub.

---

## Feedback del usuario

Después de generar una paleta, aparece temporalmente el mensaje:

```text
¡Paleta generada!
```

El mensaje utiliza una transición de opacidad y desaparece automáticamente después de unos segundos.

---

## Autor

**Juan Garcia**

Proyecto realizado para la **Cohorte webft78**.

### GitHub

Repositorio y perfil del autor:

https://github.com/jmgc9601-pixel

---

## Año

**2026**

---

## Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje.