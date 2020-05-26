let valores = []
let res = document.getElementById('res')

function adicionar() {
    let txtnum = document.getElementById('txtnum')
    if (txtnum == '') {
        alert('Digite um número válido!!')

    } else if (Number(txtnum.value) > 100 || Number(txtnum.value) < 1) {
        alert('Digite um número entre 1 e 100')

    } else {
        let num = Number(txtnum.value)
        let tabres = document.getElementById('tabres')

        if (valores.indexOf(num) == -1) {
            valores.push(num)
            res.innerText = ''
            let item = document.createElement('option')
            item.text = ` O valor ${num} foi adicionado`
            tabres.appendChild(item)

        } else {
            alert('O número já foi informado!!')
        }
    }
    txtnum.focus()
    txtnum.value = ''
}

function finalizar() {
    let soma = 0
    let maior = menor = valores[0]

    if (valores.length != 0) {
        
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
    }
    else {
        alert('Digite ao menos 1 número para finalizar!!')
    }
    let media = soma / valores.length
    res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2).replace('.', ',')}</p>`
    
}