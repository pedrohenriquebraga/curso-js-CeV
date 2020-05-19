function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (fano > ano || fano.length == 0) {
        alert('Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'crianca-masc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-masc.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto-masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-masc.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
            res.appendChild(img)
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                // Criança
                img.setAttribute('src', 'crianca-femin.png')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'jovem-femin.png')
            } else if (idade <= 60) {
                // Adulto
                img.setAttribute('src', 'adulto-femin.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-femin.png')
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
            res.appendChild(img)
        
        }
    }
}