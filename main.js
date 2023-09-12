// console.log("Hola")

// const funcionFlecha = (param) => {
//   return `Hola soy un ${param}`
// }

// console.log(funcionFlecha("numero"))

// function funcionFlecha1(param){
//   return `Hola soy un ${param}`
// }

// console.log(funcionFlecha1("numero"))



// let nemo = arrMascotas[2]
// console.log(nemo)

// arrMascotas.map((mascota, index) => {
//   console.log(index ,mascota)
// })

// const arrStudent = [
//   {nombre: "juan", carrera: "psicología"}, 
//   {nombre: "paco", carrera: "psicología"},
//   {nombre: "pedro", carrera: "psicología"},
//   {nombre: "de la mar", carrera: "psicología"}
// ]



// let object = {
//   saludo: 'Hola!',
//   despedida: 'Adios!'
// }

// console.log(object)
// const agregarValor = (propiedad, valor) => object[propiedad] = valor
// agregarValor('saludo', 'Hola Mundo!')
// agregarValor('despedida', 'Adios Mundo!')
// agregarValor('nombre', 'Luis')
// console.log(object)



// let {forma, fondo, delineado} = dibujo

// console.log(forma, fondo, delineado)

// let keys = Object.keys(dibujo)
// console.log(keys)

// keys.forEach((key) => {
//   console.log(key)
//   console.log(dibujo[key])
// })

const arrMascotas = [
  {tipo:"Perro", nombre: "fido"},   
  {tipo:"Gato", nombre: "bigotes"}, 
  {tipo:"Pez", nombre: "Merlin"}
]

// const agregarMascota = (mascota) => {
//   arrMascotas.push(mascota)
// }
//splice
// const eliminarUltima = () =>{
//   arrMascotas.pop()
// }

class Mascota{
  constructor(nombre, tipo){
    this.nombre = nombre
    this.tipo = tipo
  }
}

const getValueInput = () =>{
  let inputType = document.getElementById("tipo").value; 
  let inputValue = document.getElementById("nombre").value; 
  const mascota = new Mascota(inputType, inputValue)
  arrMascotas.push(mascota)
  console.log(arrMascotas)
  render()
  return arrMascotas
}

const input = document.getElementById("nombre")
const container = document.querySelector(".container");
// input.target.value()
const render = () => {
  arrMascotas.map((mascota) => {
    let nodo = document.createElement('LI');
    let textNodo = document.createTextNode(mascota.nombre)
    nodo.appendChild(textNodo)
    document.getElementById('lista').appendChild(nodo)
  })
}





// let object = {
//   saludo: 'Hola!',
//   despedida: 'Adios!'
// }

// const agregarNuevoValor = (propiedad, valor) => {
//   if (Object.keys(object).includes(propiedad))
//       console.log('Ya existe!')
//   else {
//       object[propiedad] = valor
//       console.log(object)
//   }
// }

// agregarNuevoValor('saludo', 'hola')

// agregarNuevoValor('nombre', 'Luis')

// let libros = []

// const agregarLibro = (libro) => {
//   libros.push(libro)
// }

// agregarLibro({nombre: "Quijote", autor: "cervantes"})
// agregarLibro({nombre: "Cid", autor: "desconocido"})
// agregarLibro({nombre: "Rayuela", autor: "Cortazar"})

// const imprimir = () => {
//   console.log(libros)
// }

// imprimir()

// const dibujo = {
//   forma: "unicornio",
//   colores: ["azul", "morado"],
//   fondo: "bosque",
//   delineado: true
// }

// class Dibujo{
//   constructor(forma, fondo){
//     this.forma = forma
//     this.fondo = fondo
//   }

//   descDibujo(){
//     console.log(`Este dibujo es de un ${this.forma} sobre un ${this.fondo}`)
//   }
// }

// const unicornio = new Dibujo("Unicornio", "Bosque")
// const oso = new Dibujo("Oso", "Edificios")
// console.log(unicornio)
// console.log(oso.forma)

// oso.descDibujo()

// class Personaje{
//   constructor(forma, daño, arma){
//     this.forma = forma
//     this.daño = daño
//     this.arma = arma
//   }

//   atacar(){
//     if(this.arma === "espada"){
//       return daño*4
//     } else if(this.arma = "arco"){
//       return daño
//     }
//   }
// }

// class Heroe extends Personaje{
//   constructor(forma, daño, arma, bonus){
//     super(forma, daño, arma)
//     this.bonus = bonus
//   }
// }


