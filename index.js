//objeto
let nombre ="Frank"
console.log(nombre)
const objeto ={
    nombre: "Frank",
    edad: "30"
}

console.log(objeto)

//funciones con return clasica
function mostrar1(nombre,edad){
    return(`el nombre es ${nombre}, y edad ${edad}`)
}
//funciones de flechas sin return y con solo una entrega (moderna)
const mostrar2 =(nombre,edad)=>
`el nombre es ${nombre}, y edad ${edad}`


console.log(mostrar1("Juan", 30 ))

//funciones sin return y con mas cosas
const mostrar2 =(nombre,edad)=>{
    `el nombre es ${nombre}, y edad ${edad}`
}

console.log(mostrar2("Juan", 30 ))