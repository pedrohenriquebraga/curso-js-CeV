let valores = []
let res = document.getElementById('res')

function adicionar() {
    let txtnum = document.getElementById('txtnum').value
    if (txtnum == '') {
        alert('Digite um número válido!!')

    } else if (Number(txtnum) > 100 || Number(txtnum) < 1) {
        alert('Digite um número entre 1 e 100')

    } else {
        let num = Number(txtnum)
        let tabres = document.getElementById('tabres')

        if (valores.indexOf(num) == -1) {
            valores.push(num)
            res.innerText = ''
            let item = document.createElement('option')
            item.text = `Valor ${num} foi adicionado com sucesso!!`
            tabres.appendChild(item)

        } else {
            alert('O número já foi informado!!')
        }
    }
}

function finalizar() {
    if (valores.length != 0) {
        let cont = maior = menor = soma = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            cont++
            if (cont == 1) {
                maior = menor = valores[pos]
            } else {
                if (valores[pos] > maior) {
                    maior = valores[pos]
                }
                if (valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
        }
        let media = soma / valores.length
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2).replace('.', ',')}</p>`
    } else {
        alert('Digite ao menos 1 número para finalizar!!')
    }
}