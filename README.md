[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

# Práctica 4 - Arrays, tuplas y enumerados

Guillermo Emmanuel González Méndez - alu0101466941

## Índice

- [Introducción](#introducción)
- [Objetivos](#objetivos)
- [Desarrollo de la práctica](#desarrollo-de-la-práctica)
- [Modificación](#modificación)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)

## Introducción

## Objetivos

## Desarrollo de la práctica

Coveralls istanbul
añadir los badges

### Ejercicio 1 - La mudanza

### Ejercicio 2 - Facturas en diferentes formatos

Para la resolución de este ejercicio hemos creado una clase principal `Invoice` que contiene los detalles de la factura como el número de factura, nombre de cliente, fecha, etc, y un array de productos, para el que hemos creado un tipo `Product` que contiene el nombre y precio, y un tipo `Article` que contiene el producto y la cantidad.

Contamos con una interfaz `InvoiceGenerator` que contiene el método `generateInvoice` que recibe una factura y exporta la factura en el formato deseado. Para ello hemos creado dos clases que implementan esta interfaz, `PDFInvoiceGenerator` y `HTMLInvoiceGenerator`, que generan la factura en formato PDF y HTML respectivamente. Estas facturas se guardan en una carpeta llamada invoices. Esto nos permite añadir nuevos formatos de factura en el futuro sin tener que modificar el código de la clase `Invoice`, simplemente creando una nueva clase que implemente la interfaz `InvoiceGenerator`, respetando así el principio SOLID Open/Closed.

Por último hemos creado una clase `BillingSystem` que recibe un generador como parámetro y nos permite ejecutar el método `generateInvoice` para generar la factura en el formato deseado añadiendo como parámetro la factura que queremos generar.

Hemos utilizado las librerías `pdfkit` y `fs` para generar el PDF y `fs` para generar ambos.

### Ejercicio 3 - Gestor de ficheros

### Ejercicio 4 - Impresoras y escáneres

## Modificación

## Conclusiones

## Bibliografía
