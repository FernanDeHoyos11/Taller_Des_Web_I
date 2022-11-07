function numero(num){
  if(num > 0){
    console.log('el numero es positivo', num)
  }else if(num < 0){
     console.log('el numero es negativo', num)
  }else{
    console.log('el numero es neutro', num)
  }
}

function par_impar(num){
  if(num % 2 == 0 && num!=0){
    console.log('el numero es par', num)
  }else if(num % 2 == 1){
    console.log('el numero es impar', num)
  }else{
    console.log('Para los matemáticos, la respuesta es sencilla: el cero es un número par.')
  }
  
}

function num_divicible(num){
   if(num % 5 == 0 && num % 3 == 0){
     console.log('el numero es divicible por ambos numeros', num)
   }else if(num % 5 == 0){
     console.log('el numero solo es divicible por 5 => ', num)
   }else if(num % 3 == 0){
     console.log('el numero solo es divicible por 3 => ', num)
   }else{
     console.log('el numero no solo es divicible por ninguno de los dos numeros')
   }
}

function NumMes(num){
  switch(num){
    case 1:
      console.log('el mes es enero');
      break
    case 2:
      console.log('el mes es febrero');
      break
    case 3:
      console.log('el mes es marzo');
      break
    case 4:
      console.log('el mes es abril');
      break
    case 5:
      console.log('el mes es mayo');
      break
    case 6:
      console.log('el mes es junio');
      break
    case 7:
      console.log('el mes es julio');
      break
    case 8:
      console.log('el mes es agosto');
      break
    case 9:
      console.log('el mes es septiembre');
      break
    case 10:
      console.log('el mes es octubre');
      break
    case 11:
      console.log('el mes es noviembre');
      break
    case 12:
      console.log('el mes es diciembre');
      break
    default:
      console.log('numero invalido para mes');
  }
}

function creci(a,b,c){
  if(a==b && b==c && c==a){
    console.log('los numeros son iguales')
  }else if(b > a && c > b){
    console.log('los numeros estan en orden creciente')
  }else if(b < a && c < b){
    console.log('los numeros estan en orden decreciente')
  }
}



function ordenL(a,b){
  a = a.charCodeAt(0)
  b = b.charCodeAt(0)
  
  if(a < b){
    console.log('estan en forma ascendente')
  }else if(b < a){
    console.log('estan en forma descendente')
  }else if(a == b){
    console.log('las letras son iguales')
  }
}
ordenL('b','b')
