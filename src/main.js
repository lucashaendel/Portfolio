// MENU HAMBURGUESA
// function cambiarClase() {
//   let siteNav = document.getElementById("site-nav");
//   siteNav.classList.toggle("site-nav-open");
//   let menuOpen = document.getElementById("menu-toggle");
//   menuOpen.classList.toggle("menu-open");
// }

// // BARRA DE PROGRESO
// window.addEventListener("scroll", function () {
//   progreso();
// });
// function progreso() {
//   let scroll = document.documentElement.scrollTop;
//   let alto =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   let progreso = (scroll / alto) * 100;
//   document.getElementsByClassName("barra")[0].style.width = progreso + "%";
// }

// EFECTO MAQUINA DE ESCRIBR
// const maquina = document.getElementById("maqesc");
// const maquinaEsc = (text = "", tiempo = 200, etiqueta = "") => {
//   let arrayCaracteres = text.split("");
//   etiqueta.innerHTML = "";
//   let cont = 0;
//   let escribir = setInterval(function () {
//     etiqueta.innerHTML += arrayCaracteres[cont];
//     cont++;
//     if (cont === arrayCaracteres.length) {
//       cont = 0;
//       etiqueta.innerHTML = "";
//     }
//   }, tiempo);
// };
// maquinaEsc("Full Stack Developer        ", 100, maquina);

// // ANIMACION DEL TEXTO - SOBRE MI
// let animado = document.querySelectorAll(".animado");

// function mostrarScroll() {
//   let scrollTop = document.documentElement.scrollTop;
//   for (var i = 0; i < animado.length; i++) {
//     let alturaAnimado = animado[i].offsetTop;
//     if (alturaAnimado - 400 < scrollTop) {
//       animado[i].style.opacity = 1;
//       animado[i].classList.add("mostrarArriba");
//     }
//     if (alturaAnimado - 400 > scrollTop) {
//       animado[i].style.opacity = 0;
//       animado[i].classList.add("mostrarAbajo");
//       animado[i].classList.remove("mostrarArriba");
//     }
//   }
// }
// window.addEventListener("scroll", mostrarScroll);

// // PORTFOLIO

// filterSelection("all");
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
