const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
    preventDefault: () => {},
  },
];

const boton = document.getElementById("btn-search");
boton.addEventListener("click", (evento) => {
  evento.preventDefault();

  const inputDato = document.getElementById("search").value;
  const codigoErroneo = document.getElementById("codigoErroneo");
  if (isNaN(inputDato)) {
    if (codigoErroneo) codigoErroneo.innerHTML = "Ingresaste un dato no valido";
    return;
  }
  if (inputDato >= 6 || inputDato <= 0) {
    if (codigoErroneo)
      codigoErroneo.innerHTML = "Tiene que ser un numero entre 1 y 5";
    return;
  }
  const pizza = pizzas.find((pizza) => pizza.id === parseInt(inputDato));
  if (pizza) {
    if (codigoErroneo) codigoErroneo.innerHTML = "";
    const pizzaImagen = document.getElementById("pizzaImagen");
    const pizzaNombre = document.getElementById("pizzaNombre");
    const pizzaPrecio = document.getElementById("pizzaPrecio");
    if (pizzaImagen) pizzaImagen.src = pizza.imagen;
    if (pizzaNombre) pizzaNombre.innerHTML = pizza.nombre;
    if (pizzaPrecio) pizzaPrecio.innerHTML = pizza.precio;
  }
});
