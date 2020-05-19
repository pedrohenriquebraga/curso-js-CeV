function contar() {
    let txtini = document.getElementById('txtini').value
    let txtfim = document.getElementById('txtfim').value
    let txtpas = document.getElementById('txtpas').value
    if (txtini == '' || txtfim == '' || txtpas == '') {
        alert('Todos os campos devem ser preenchidos!!')
    } else {
        let inicio = Number(txtini)
        let fim = Number(txtfim)
        let passo = Number(txtpas)
        if (passo == 0) {
            alert('O passo não pode ser 0. Será considerado passo 1.')
            passo = 1
        }
        let res = document.getElementById('res')
        res.innerHTML = '<p>Contando: </p>'
        if (inicio < fim) {
            for (let cont = inicio; cont <= fim; cont += passo) {
                res.innerHTML += ` ${cont} \u{1F449}`
                if (cont == fim) {
                    res.innerHTML += `\u{1F3C1}`
                }
            }
        } else {
            for (let cont = inicio; cont >= fim; cont -= passo) {
                res.innerHTML += ` ${cont} \u{1F449}`
                if (cont == fim) {
                    res.innerHTML += `\u{1F3C1}`
                }
            }
        }


    }
}