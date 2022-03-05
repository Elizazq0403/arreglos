let usuarios=[
    {nombre:"juan", edad:11, esPaisa: true},
    {nombre:"jCris", edad:32, esPaisa: false},
    {nombre:"Esteban", edad:10, esPaisa: true},
    {nombre:"Teresita", edad:57, esPaisa: false},
    {nombre:"Yuli", edad:31, esPaisa: true},
    {nombre:"Gustavo", edad:58, esPaisa: false},
    {nombre:"Bibiana", edad:40, esPaisa: true},
    {nombre:"Elizabeth", edad:35, esPaisa: false},
    {nombre:"Blanca", edad:56, esPaisa: true},
    {nombre:"Leidy", edad:30, esPaisa: false}, //arreglo de objetos
]

//filtrar el arreglo para obtener solo los usuarios mayores de edad

/*let filtrado=usuarios.filter(function(usuario){ //function() funcion anonima que usa una solo vaez

    return(usuario.edad>=18) //esta es la condicion de filtrado

}) 
console.log(filtrado)*/

/*let mostrar=usuarios.filter(function(usuario){

    return(usuario.esPaisa!=true)// esto es una condicion
})
console.log(mostrar)*/

/*let usar=usuarios.filter(function(usuario){

    return(usuario.esPaisa==true && usuario.edad>=18)
})
console.log(usar)*/

/*let datosMapeados=usuarios.map(function(usuario){
    return(usuario.nombre=usuario.nombre+" -- cesde")

})
console.log(datosMapeados)
console.log(usuarios)*/

let suma=0
usuarios.forEach(function(usuario){

    suma=suma+usuario.edad
    console.log(suma)
})



