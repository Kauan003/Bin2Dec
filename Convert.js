let binary = document.querySelector('input')
var conv = document.querySelector('p')

function ConvertToDecimal()
{   
        var digits = binary.value.split('').reverse()
        var digit_filtrado = digits.filter((element) =>{
            return element > 1
        })
    
    if(digit_filtrado[0] > 1 ){
        conv.innerHTML = "Não é um numero binario!"
    }
    else {
    const novoArray = digits.map((element, index) =>{
        return element*2**index
    })
    const decimal = novoArray.reduce((element, i) =>{
        return element + i
   })
  conv.innerHTML = `${decimal}`
  }
}

    

