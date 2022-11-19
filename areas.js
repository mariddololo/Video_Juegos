var figuras = ["triangulo","paralelogramo","rectangulo","cuadrado","rombo","cometa", "trapecio","circulo"]
 let b = document.getElementById("base")


document.getElementById("botondeFigura").addEventListener("click",function(){
    let figura = document.getElementById("figura").value
    if (figuras.indexOf(figura) !== -1){
        if (figura == "circulo"){
            // let radio = prompt("Ingrese el radio: ")
            // document.write(`El area del cirulo es de: ${Math.PI*Math.pow(radio,2)}cm`)
            document.getElementById("circulo").style.display = "block"
        }
        if (figura == "triangulo"){
            // let altura = prompt("Ingrese la altura del triangulo: ")
            // let base = prompt("Ingrese la base del triangulo: ")
            // let resultado = (base * altura)/2
            // // document.write(`La area del triangulo es de: ${resultado}`)
            // document.getElementById("resultado").innerHTML = `El resultado es de: ${resultado}`
            document.getElementById("triangulo").style.display = "block"

        }
        // if (figura == "paralelogramo"){
        //     document.getElementById("resultado1").innerHTML = `<label>Ingrese la base</label><input type="number" id="base"> <button onclick="base()">Aceptar</button>`
        //     let altura =document.getElementById("resultado2").innerHTML = `<label>Ingrese la altura</label><input type="number" id="altura">`   
        //     let resultado = resultado1 * resultado2
        // }
        if (figura == "cuadrado"){
            // let altura = prompt("Escribe la altura: ")
            // let resultado = altura * altura
            // document.getElementById("resultado").innerHTML = `El resultado es de: ${resultado}`
            document.getElementById("cuadrado").style.display = "block"
        }
        if (figura == "rectangulo"){
            document.getElementById("rectangulo").style.display = "block"
        }
        if (figura == "rombo"){
            document.getElementById("rombo").style.display = "block"
        }
        if (figura == "trapecio"){
            document.getElementById("trapecio").style.display = "block"
        }

        if (figura == "paralelogramo"){
            document.getElementById("paralelogramo").style.display = "block"
        }
        if (figura == "cometa"){
            document.getElementById("cometa").style.display = "block"
        }
    } 
   
    else{
        document.getElementById("resultado").innerHTML = "opcion no valida"
    }
})
/*funcion del rectangulo*/
function bas(){
    try{
        var a = parseFloat(document.getElementById("base").value) || 0;
        b = parseFloat(document.getElementById("altura").value) || 0;
        document.getElementById("recta").value = a * b
        document.getElementById("recta").innerHTML = `El area del rectangulo es de: ${a * b}`

    } catch (e){}
    
}
/*rombo*/ 

function Rom(){
    try{
        var a = parseFloat(document.getElementById("DM").value) || 0;
        b = parseFloat(document.getElementById("Dm").value) || 0;
        document.getElementById("romb").innerHTML = `El area del rombo es de: ${(a*b)/2}`
    } catch (e){}
}  

/*triangulo*/
function tri(){
    try{
        var a = parseFloat(document.getElementById("Base").value) || 0;
        b = parseFloat(document.getElementById("Altura").value) || 0;
        document.getElementById("tri").innerHTML = `El area del triangulo es de: ${(b*a)/2}`
    } catch (e){}
} 

/*cuadrado*/ 
 function cua(){
     try{
         var a = parseFloat(document.getElementById("Cuadrado").value) || 0;
         
         document.getElementById("cua").innerHTML = `El area del cuadrado es de: ${a * a}`
     } catch(e){}
 }

/*circulo */

function cir(){
    try{
        var a = parseFloat(document.getElementById("radio").value) || 0;
        b = 3.1416
        document.getElementById("cir").innerHTML = `El area del circulo es de: ${b*(a**2)}`
    } catch(e){}
}
/*trapecio00*/
function tra(){
    try{
        var a = parseFloat(document.getElementById("Basemayor").value) || 0;
        b = parseFloat(document.getElementById("Basemenor").value) || 0;
        c = parseFloat(document.getElementById("ALTURA").value) || 0;
        document.getElementById("trape").innerHTML = `El area del trapecio es de: ${((a+b)*c)/2} `
    } catch (e){}
}

/*paralelogramo*/
function para(){
    try{
        var a = parseFloat(document.getElementById("parale").value) || 0;
        b = parseFloat(document.getElementById("alt").value) || 0;
        document.getElementById("result").innerHTML =  `El area del paralelogramo es de: ${b*a}`
        
    }catch(e){}
   
}
/*cometa*/

function com(){
    try{
        var a = parseFloat(document.getElementById("DiMa").value) || 0;
        b = parseFloat(document.getElementById("Dima").value) || 0;
        document.getElementById("co").innerHTML = `El area del cometa es de: ${(a*b)/2}` 
    } catch(e){}
}


function a(){
    document.getElementById("cuadrado").style.display = "none"
}


function borrar(){
    document.getElementById("rectangulo").style.display = "none"
}


function bo(){
    document.getElementById("rombo").style.display = "none"
}


function bre(){
    document.getElementById("triangulo").style.display = "none"
}

function cul(){
    document.getElementById("circulo").style.display = "none"
}

function trapeci(){
    document.getElementById("trapecio").style.display = "none"

}

function paralelog(){
    document.getElementById("paralelogramo").style.display = "none"
}

function bo(){
    document.getElementById("cometa").style.display = "none"
}



// function verificarclave(){
//     let base = document.getElementById("base").value;
//     console.log(base)
// }
 
// function altura_dato(){
//     let altura = document.getElementById("altura").value;
//     console.log(altura)
// }
// let resultado = base * altura

// function suma(){
//   document.getElementById("res").innerHTML = `resultado es de: ${resultado}`
    
// }






//nuevo
// function p(){
//     if(document.getElementById("numero") == "rectangulo"){
//         document.getElementById("rectangulo").style.display = "block"
//     }
// }






// document.getElementById("botondeFigura").addEventListener("click",function(){
//     let figura = document.getElementById("figura").value
//     if (figuras.indexOf(figura !== -1)){
//        if (figura == "rectangulo"){
//             function ga(){
//                 document.getElementById("rectangulo").style.display = "block"
//             }
//         }
//     }

// })



// function arectangulo(){

// }