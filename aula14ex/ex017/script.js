function calcular() {
    var txtnum = document.getElementById('txtnum').value
    var res = document.getElementById('seltab')
    if (txtnum == '') {
        alert('Você deve informar um número!!')
    } else {
        var num = Number(txtnum)
        res.innerHTML = ''
        for (var mult = 1; mult <= 10; mult++) {
            let item =  document.createElement('option')
            let resultado = num * mult
            item.text += `${num} x ${mult} = ${resultado}`
            item.value = `res${mult}`
            res.appendChild(item)
        }
    }
}