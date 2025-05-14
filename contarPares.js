
//# 🧠 Ejercicio: Contar Pares - Prodevs Academy

//Este desafío es ideal para practicar bucles, condicionales y manipulación de arrays.

//## 📝 Instrucciones

//Debes completar la función ContarPares(arr).

//La función recibe un array de números y debe devolver la cantidad de números pares que contiene.

//### 📌 Ejemplos

//```js
//ContarPares([1, 2, 3, 4, 5, 6])     // 3
//ContarPares([1, 3, 5])              // 0
//ContarPares([2, 4, 6, 8, 10])       // 5
//```

//para instalar el node modules: npm i 
//Recorda para correr el test: npm test
function ContarPares(arr) {
    let par=0;
    for (let i=0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            par ++;
        } else{}
    }

    return par

    }



module.exports = ContarPares;
