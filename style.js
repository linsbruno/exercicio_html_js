const form = document.getElementById('numeros')

form.addEventListener('submit', function(preventdefault) {
            preventdefault.preventDefault();

            var aa = document.getElementById('a')
            var bb = document.getElementById('b')
            var a = Number(aa.value)
            var b = Number(bb.value)
            
            if (a < b){
                alert(`Tudo certo, seu documento foi validado pois ${b} é maior que ${a}`)
            }
            else if(a===b){
                alert(`Seu documento NÃO foi validado pois ${b} é igual a ${a}.Por favor, repita a opração!`)
            }
            else {
                alert(`Seu documento NÃO foi validado pois ${b} é menor ${a}.Por favor, repita a opração!`)
            }
        })

